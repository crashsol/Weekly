// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyRecomandList: [{
        name: '教父',
        comment: '最精彩的电影，顶顶顶顶',
        imagePath: '/images/1.jpg',
        isHilyRecommand: true,
        id: 77
      },
      {
        name: '这个杀手不太冷',
        comment: '最精彩的电影，杀手太冷了',
        imagePath: '/images/2.jpg',
        isHilyRecommand: false,
        id: 88
      }, {
        name: '香草天空',
        comment: '好的天空',
        imagePath: '/images/1.jpg',
        isHilyRecommand: true,
        id: 99
      }

    ],
    currentWeekly: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('OnLoad')
    this.setData({
      currentWeekly: this.data.weeklyRecomandList.length - 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  /* 单击返回本周 */
  f0: function (event) {
    this.setData({
      currentWeekly: this.data.weeklyRecomandList.length - 1
    })
  },
  f1: function (event) {
    console.log(event.currentTarget)
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/details/details?id=' + movieId
    })

  },

})