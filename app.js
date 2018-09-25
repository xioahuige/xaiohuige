//app.js
App({
  onLaunch: function () {
    // wx.getUpdateManager 在 1.9.90 才可用，请注意兼容
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function(res) {
    })
    updateManager.onUpdateReady(function (){
      wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否马上重启小程序？",
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()                           
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })
    
    
    // 先判断是否授权登录过
    // 如果登录--》if{获取用户code请求接口 保存状态} else {不做处理}
    wx.getUserInfo({
      // 授权过的用户
      success: res_user_information => {
        // ----------------------------------------------------------------------------------------------------------------------
        wx.login({
          success: function (res_user_code) {
            // 发送 res_user_code.code 到后台换取 openId, sessionKey, unionId
            if (res_user_code.code) {
              wx.request({
                url: 'http://192.168.1.148/api/info/index',
                data: {
                  code: res_user_code.code
                },
                success: function (res) {
                  wx.setStorageSync('openid', res.data.datas.openid);
                  wx.setStorageSync('nick_name', res.data.datas.nick_name);
                  wx.setStorageSync('head_img', res.data.datas.head_img);
                }
              })
              
            } else {
              // 用户没登录 弹出弹框让用户登陆
              
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        })
        // -------------------------------------------------------------------------------------------------------------------
      },
      fail: err => {
        //如果用户没有点击过授权，或者清除缓存，删除小程序，重新进入，会进入这里
        //然后你就可以进行你的操作，弹窗或者跳页面
        //跳页面推荐使用重定向 wx.redirectTo({}) 
        // console.log(err.errMsg)
      }
    })
    // 全局变量  域名限制
  },
  globalData: {
    host: 'http://192.168.1.148'
  }
})