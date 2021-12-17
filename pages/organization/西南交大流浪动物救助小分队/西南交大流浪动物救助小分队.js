//index.js

Page({
  data: {
    name: "西南交大流浪动物救助小分队",
    markers: [
      {
        iconPath: "/pages/images/xinanjiaoda.png",
        latitude: 30.764467,
        longitude: 103.986327,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/xinanjiaoda.png",
        latitude: 30.698742,
        longitude: 104.053029,
        width: 50,
        height: 50
      },
    ],


    controls: [{
      id: 1,
      iconPath: '/pages/images/xinanjiaoda.png',
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
      data: '北大猫协',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  copy2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '西南交大流浪动物救助小分队',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wxe5c18f0f1d0b67a5',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})


