// 配置一个 符合我们项目的需要的 axios 到处去进行全局的配置
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 进行配置
// 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求头  token
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

// 请求拦截器
axios.interceptors.request.use(config => {
  // 修改配置 加 token
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res => res, err => {
  // 获取状态码
  const status = err.response.status
  // 判断 401
  if (status === 401) {
    //   清空无效 token
    store.delUser()
    // 跳转登录
    // 原生方式改路径 window.location.hash = '#login'
    // 使用router进行跳转
    // $router本质 main.js导入了router/index.js的实例 挂载vue根实例下。
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
