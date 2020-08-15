//index.js

Page({
  data: {
    markers: [{
      iconPath: "/pages/images/beida_circle.png",
      id: 0,
      latitude: 39.992591,
      longitude: 116.310700,
      width: 50,
      height: 50
    }],

    controls: [{
      id: 1,
      iconPath: '/pages/images/beida_circle.png',
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

  //转发功能
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      path: 'pages/about/about',  // 路径，传递参数到指定页面。
      success: function (res) { }
    }
  },

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
        // 来自页面内转发按钮
        console.log(ops.target)
      }
      return {
        path: 'pages/about/about',  // 路径，传递参数到指定页面。
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

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  copy1: function (e) {
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
      data: 'https://github.com/SCCAPKU/miniprogram',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),
       
      }
    })
    },

    naviToMini:function(e){
      wx.navigateToMiniProgram({
        appId: 'wx176cdf19e4cadaaf',
        // path: 'pages/index/index',
        envVersion: 'release',
        success(res) {
          // 打开成功
        }
      })
     }
  
})


