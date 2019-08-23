import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
// import router from './router/index'

// import '@/styles/index.less'

// 简单配置 axios
import axios from '@/api'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// // main.js 作用入口文件  具体的职责：
// // 1. 负责依赖资源的全局导入
// // 2. 创建一个vue根实例 去管理index.html中app容器
