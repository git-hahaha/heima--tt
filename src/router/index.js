// // 职责： 创建一个 router 实例  导出给 main 使用

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Test from '@/views/test'

Vue.use(VueRouter)

// export default new VueRouter({
//   routes: [
//     // { path: '/', component: Home }
//   ]
// })
var router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/test', name: 'test', component: Test },
    {
      path: '/',
      component: Home,
      children: [
        // 路由规则
        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

// // 前置守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

// // 导出
export default router
