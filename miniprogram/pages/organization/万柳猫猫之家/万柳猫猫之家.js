//index.js

Page({
  data: {
    name: "万柳猫猫之家",
    markers: [
      {
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/wanliumeow.png",
        latitude: 39.961041,
        longitude: 116.297433,
        width: 50,
        height: 50
      },
    ],


    controls: [{
      id: 1,
      iconPath: 'https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/wanliumeow.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.name,
      path: '/pages/index/index?pageId=' + this.data.name,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  onShareTimeline: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.name,
      path: '/pages/index/index?pageId=' + this.data.name,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '15813323234',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  copyTBL1: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'zhengliyin1007@163.com',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  copy2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '万柳猫猫之家',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx6221c35fc9878631',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})


