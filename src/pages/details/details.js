// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      status:0
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
  imgdetails: function () {
    wx.navigateTo({
      url: '../imgdetails/imgdetails'
    })
  },
  user: function () {
    wx.navigateTo({
      url: '../user/user'
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有['album', 'camera']  
      success: function (res) {
        wx.navigateTo({
          url: '../image/image?msg='+res.tempFilePaths,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        //console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  } ,
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 10,
      camera: 'back',
      success: function (res) {

        that.setData({
          src: res.tempFilePath
        })
        wx.navigateTo({
          url: '../video/video?src=' + res.tempFilePath,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    })
  } ,
  play: function () {
    this.setData({
      status:1
    })
  } ,
  Close: function () {
    this.setData({
      status:0
    })
  }
})