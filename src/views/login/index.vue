<template>
    <div class="container">
        <el-card class="my-card">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号">请输入手机号</el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px">请输入验证码</el-input>
                    <el-button type="primary">发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login()" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
export default {
//   mounted () {
//     // 渲染完毕
//     // $refs  是当前组件上所有使用过ref属性的元素集合（对象）
//     // ref="value" value就是你集合中的属性名称
//     // const box = this.$refs.box  标签  dom
//     // const loginForm = this.$refs.loginForm
//     // console.log(box)   组件  vue实例
//     // console.log(loginForm)
//   },
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不合法'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码长度6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              // 跳转成功
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
    /* background-color: pink; */
    background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.my-card{
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
img{
    width: 200px;
    display: block;
    margin: 0 auto 20px;
}
</style>
