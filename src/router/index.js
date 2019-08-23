// 职责： 创建一个 router 实例  导出给 main 使用

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

// 导出
export default router
