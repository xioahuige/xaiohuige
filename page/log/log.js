// pages/log/log.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    none:true,
    nones:true,
  },
// 实时打印input框的值 并进行监听
  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    var a = this.data.inputValue
    var that = this;
    if (a == "") {
      that.setData({ 'none':true});
      that.setData({ 'nones':true});
    }
    if(a!==""){
      that.setData({ 'nones': false });
    }
    if (a){
      wx.request({
        url: 'https://www.jingdianjiaoyu.cn/apphome/senior/wx_seniorsearch',
        data: { 
          school_name: a,
        },
        method: 'GET',
        success: function (res) {
          that.setData({goods:res.data.data});
          console.log(res.data.data);
          if (res.data.data.length == 0){
            that.setData({'none':true});
          }else{
            that.setData({'none':false });
          } 
          console.log(a);
        
        }
      })
    }
    
  },
  // 清空input选框的内容
  clearInput: function () {
    this.setData({
      inputValue: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载 
   * 热门搜索数据渲染加载 
   */
  onLoad: function () {
    var that = this;
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: '',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ goodslist: res.data.data.senior_zou });
        console.log(res.data.data, 1111111);
      },

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
  
  },

  bindchange: function (e) {
    // console.log('bindchange')
  },

  bindskys: function(){
    var a = this.data.inputValue;
    wx.navigateTo({
      url: '../Results/Results?school_name='+ a,
    })
  },

  history:function(){
    wx.navigateTo({
      url: '../index/index'
    })
  }
})
