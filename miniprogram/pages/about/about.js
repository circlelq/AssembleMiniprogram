Page({
  data: {
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0
  },
  //转发功能
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') {}
    return {
      path: 'pages/about/about', // 路径，传递参数到指定页面。
      success: function (res) {}
    }
  },

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/about/about', // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  copy1: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'yuanlq@pku.edu.cn', //需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

  copy2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'https://gitee.com/circlelq/AssembleMiniprogram', //需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

  copy3: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'https://gitee.com/circlelq/yan-yuan-mao-su-cha-shou-ce', //需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

  copy4: function (e) {
    var self = this;
    wx.setClipboardData({
      data: 'https://github.com/Zing22/zhongdamaopu', //需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  }
})