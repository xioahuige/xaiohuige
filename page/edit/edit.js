var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nick_name : wx.getStorageSync('nick_name'),
    head_img : wx.getStorageSync('head_img'),
    state : wx.setStorageSync('state'),
    host: app.globalData.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://192.168.1.148/api/info/detail',
      data: {
        openid: wx.getStorageSync('openid')
      },
      method: 'GET',
      success: function(res) {
        that.setData({
          gender_arr: [
            { name: '男' , id:1},
            { name: '女',  id:2},
            { name: '未知',id:0}
          ],
          gender: res.data.datas.gender,
          address: res.data.datas.address,
          unit_price: res.data.datas.unit_price,
          introduction: res.data.datas.introduction,
          explain: res.data.datas. explain,
          dizhi: '北京市'
        })
      }
    })
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

  }
})