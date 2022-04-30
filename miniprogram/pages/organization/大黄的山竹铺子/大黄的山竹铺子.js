//index.js

Page({
  data: {
    name: "大黄的山竹铺子",
    markers: [

      { // 石牌校区
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
        latitude: 23.13935,
        longitude: 113.352078,
        width: 50,
        height: 50
      },
      {// {大学城校区
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
        latitude: 23.052559,
        longitude: 113.380095,
        width: 50,
        height: 50
      },
      {// {南海校区
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
        latitude: 23.146853,
        longitude: 113.028152,
        width: 50,
        height: 50
      },

    ],

    controls: [{
      id: 1,
      iconPath: 'https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png',
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
  copy1: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '大黄的故事',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  copy2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '大黄喵署',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  copy3: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '南海大黄猪',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx7282aa71ae871cc4',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})
