// app.js    172.20.10.2
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    globalIP:'172.20.10.2',//手机热点
    // globalIP:'10.11.25.198',//公司
    // globalIP:'10.11.25.198',//家里
  }
})
