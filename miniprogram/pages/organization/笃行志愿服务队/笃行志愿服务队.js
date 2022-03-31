//index.js

Page({
  data: {
    name:"笃行志愿服务队",
    markers: [
    {
      iconPath: "/pages/images/duxing.png",
      latitude: 23.065118,
      longitude: 113.390597,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/duxing.png",
      latitude: 23.096717,
      longitude: 113.298399,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/duxing.png",
      latitude: 23.200489,
      longitude: 113.292419,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/duxing.png",
      latitude: 23.063969,
      longitude: 113.397682,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/duxing.png",
      latitude: 23.158311,
      longitude: 113.358473,
      width: 50,
      height: 50
    },
  ],
    

    controls: [{
      iconPath: '/pages/images/duxing.png',
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

  copy1: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '笃行志愿服务队',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),
       
      }
    })
    },

    copy2: function (e) {
      var self = this;
      wx.setClipboardData({
        data: 'dxzyfwd@163.com',//需要复制的内容
        success: function (res) {
          // self.setData({copyTip:true}),
         
        }
      })
      },

  naviToMini:function(e){
    wx.navigateToMiniProgram({
      appId: 'wx5bd705b2bc91c73b',
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
   },


  
})


