//我的页面
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: { 
    nick_name: wx.getStorageSync('nick_name'),
    head_img: wx.getStorageSync('head_img'),
    state: wx.getStorageSync('state'),
    host: app.globalData.host
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 判断是普通用户 还是高级用户  s
    var state = wx.getStorageSync('state');
    // 专家才能有收益    
    if (state == 2){
      // 这是多余的 s
      wx.setStorageSync('revenue', 1);
      that.setData({
        revenue: wx.getStorageSync('revenue')
      })
      // 这是多余的 e
      var revenue = wx.getStorageSync('revenue'); //这是用户总收益 存在的时候 不需要在此请求
      if (revenue) {

      } else {
        // 本地没有存储过总收益 需要重新请求一次
        wx.request({
          url: '',
          data: {
            openid: wx.getStorageSync('openid')
          },
          success: res => {
            wx.setStorageSync('revenue',)
          }
        })
      }
    }
    // 判断是普通用户 还是高级用户  e
      
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
    console.info(111);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  history:function(){
    wx.navigateTo({
      url: '../edit/edit'
    })
  },

  question:function(){
    wx.navigateTo({
      url: '../list/list'
    })
  },

  answer: function () {
    wx.navigateTo({
      url: '',
    })
  },
})