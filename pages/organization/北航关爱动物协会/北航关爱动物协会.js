//index.js

Page({
  data: {
    markers: [{
      iconPath: "/pages/images/beihang_circle.png",
      id: 1,
      latitude: 39.981795,
      longitude: 116.347127,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/beihang_circle.png",
      id: 0,
      latitude: 40.153517,
      longitude: 116.270252,
      width: 50,
      height: 50
    },
  ],
    

    controls: [{
      id: 1,
      iconPath: '/pages/images/beihang_circle.png',
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
      data: '2218371150@qq.com',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),
       
      }
    })
    },

    naviToMini:function(e){
      wx.navigateToMiniProgram({
        appId: 'wx3d6526675d745e0f',
        // path: 'pages/index/index',
        envVersion: 'release',
        success(res) {
          // 打开成功
        }
      })
     }
  
})


