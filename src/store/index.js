// 负责用户的信息  存储 获取 删除 三个函数

const KEY = 'heima-tt-80-user'
export default {
  // 存储用户信息
  setUser (user) {
    // uesr 数据类型
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取用户信息
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(jsonStr)
  },

  // 删除用户信息
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
