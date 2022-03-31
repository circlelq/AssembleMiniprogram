//index.js

Page({
  data: {
    name:"科大猫咪",
    markers: [
      {
        iconPath: "/pages/images/ustc.png",
        latitude: 31.843821,
        longitude: 117.268886,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/ustc.png",
        latitude: 31.839239,
        longitude: 117.263567,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/ustc.png",
        latitude: 31.821708,
        longitude: 117.281467,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/ustc.png",
        latitude: 31.838365,
        longitude: 117.255554,
        width: 50,
        height: 50
      },
    {
      iconPath: "/pages/images/ustc.png",
      latitude: 31.837073,
      longitude: 117.26956,
      width: 50,
      height: 50
    },
  ],
    

    controls: [{
      id: 1,
      iconPath: '/pages/images/ustc.png',
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
      path: '/pages/index/index?pageId='+this.data.name,
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
      path: '/pages/index/index?pageId='+this.data.name,
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
      data: '科大猫咪',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),
       
      }
    })
    },
  naviToMini:function(e){
    wx.navigateToMiniProgram({
      appId: 'wxf2701f15e3f6197e',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
   }
  
})


