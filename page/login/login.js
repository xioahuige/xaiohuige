var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  bindGetUserInfo: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      // 发送 res.code 到后台换取 openId, 判断是不是老用户 
      wx.login({
        success: res => {
          wx.request({
            //后台接口地址
            url: app.globalData.host+'/api/info/index',
            data: {
              code: res.code,
              // iv: e.detail.iv,
              // encryptedData: e.detail.encryptedData,
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res);
              // 新用户
              if (res.data.code == 3){
                  // 保存用户信息
                  wx.setStorageSync('nick_name', e.detail.userInfo.nickName);
                  wx.setStorageSync('head_img', e.detail.userInfo.avatarUrl);
                  wx.setStorageSync('openid', res.data.datas.openid);
                  // 在此请求
                  wx.request({
                    url: app.globalData.host + res.data.datas.url,
                    data:{
                      openid: res.data.datas.openid,
                      nick_name: e.detail.userInfo.nickName,
                      head_img: e.detail.userInfo.avatarUrl
                    },
                    method: 'POST',
                    header: {
                      'content-type': 'application/json'
                    },
                    success:function(res1){
                      console.log(res1);
                    }
                  })
              // 老用户
              } else if (res.data.code == 2){
                wx.setStorageSync('nick_name', res.data.datas.nick_name);
                wx.setStorageSync('head_img', res.data.datas.head_img);
                wx.setStorageSync('openid', res.data.datas.openid);
              }
             
            }
          })
        }
      })
    } else {
      console.log(333, '执行到这里，说明拒绝了授权');
      wx.showToast({
        title: "为了您更好的体验,请先同意授权",
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
    //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../log/log'
  //   })
  // },

})