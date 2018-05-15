//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    status:0
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  remove: function () {
    this.setData({
      status:1
    })
  }
})
