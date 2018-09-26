// 个人主页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHideLoadMore:true,
    school_type: [
      {
        "name": "Google",
        "url": "http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg",
        "money":"99元提问"
      },
      {
        "name": "Baidu",
        "url": "http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg",
        "money": "199元提问"
      },
      {
        "name": "SoSo",
        "url": "http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg",
        "money": "1元提问"
      }
    ] 

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 传参  分类
    console.log(options.type);
    
    // 点击跳转个人页面  传递个人id

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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('加载更多')
   
  },

  //  * 用户点击右上角分享

  onShareAppMessage: function () {

  }
})