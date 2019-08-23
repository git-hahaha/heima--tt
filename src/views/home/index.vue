<template>
    <el-container class="my-container">
        <el-aside :width="isCollapse?'64px':'200px'">
            <div class="logo" :class="{minilogo: isCollapse}"></div>
            <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                background-color="#002033"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="isCollapse"
                :collapse-transition="false"
                router
                >
                <!-- 如果是 布尔类型的值 有属性代码 true 没有属性代表false -->
                <el-menu-item index="/">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/article">
                    <i class="el-icon-document"></i>
                    <span slot="title">内容管理</span>
                    </el-menu-item>
                    <el-menu-item index="/image">
                    <i class="el-icon-picture"></i>
                    <span slot="title">素材管理</span>
                    </el-menu-item>
                    <el-menu-item index="/publish">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">发布文章</span>
                    </el-menu-item>
                    <el-menu-item index="/comment">
                    <i class="el-icon-chat-dot-round"></i>
                    <span slot="title">评论管理</span>
                    </el-menu-item>
                    <el-menu-item index="/fans">
                    <i class="el-icon-present"></i>
                    <span slot="title">粉丝管理</span>
                    </el-menu-item>
                    <el-menu-item index="/setting">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <span @click="toggleAside" class="icon el-icon-s-fold"></span>
                <span class="text">江苏传智播客科技教育有限公司</span>
                <el-dropdown class="my-dropdown" @command="clickItem">
                    <span class="el-dropdown-link">
                        <img class="avatar" :src="photo" alt="">
                        <span class="name">{{name}}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <!-- <el-dropdown-item icon="el-icon-setting" @click.native="setting()">个人设置</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-unlock" @click.native="logout()">退出登录</el-dropdown-item> -->
                        <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main>
                <!-- 渲染二级路由 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''
    }
  },
  created () {
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    // 切换状态
    toggleAside () {
      this.isCollapse = !this.isCollapse
    },
    // 绑定的是 click 事件 原生的DOM支持的事件
    // el-dropdown-item 组件 是否支持 click 事件 看element组建的文档
    // 怎么给组件绑定原生的事件
    // 按键修饰符 @keyup.enter  按下 enter键后触发的事件
    // 事件修饰符：@click.stop 阻止事件冒泡
    // 事件修饰符：@click.native 给组件绑定原生的事件
    clickItem (command) {
      // 判断值 setting 还是 logout
      // 如果 command === setting 调用 this.setting()
      // 如果 command === logout 调用 this.logout()
      // 意思 ： const o = {a:10, b:20} 等价 o.a === o['a']
      this[command]()
    },
    // 个人设置
    setting () {
      this.$router.push('/setting')
    },
    // 退出登录
    logout () {
      // 删除本地用户信息
      store.delUser()
      // 跳转页面
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.my-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.el-aside{
    background-color: #002033;
}
.logo{
    width: 100%;
    height: 60px;
    background: #002244 url(../../assets/images/logo_admin.png) no-repeat center / 140px auto;
}
.minilogo{
    background-image: url(../../assets/images/logo_admin_01.png);
    background-size: 36px auto;
}
.el-menu{
    border-right: none;
}
.el-header{
    border: 1px solid #ddd;
    line-height: 60px;
}
.icon{
    font-size: 24px;
    vertical-align: middle;
}
.text{
    vertical-align: middle;
}
.my-dropdown{
    float:right;
}
.avatar{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.name{
    color: #333;
    font-weight: 700;
    vertical-align: middle;
}
</style>
