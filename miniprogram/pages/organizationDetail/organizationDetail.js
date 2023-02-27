var organization_id = "1";
const app = getApp();

Page({
  data: {
    organization: {},
    markers: [],
    photoscr: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    organization_id = options.organization_id;
    app.mpServerless.db.collection('organization').find({
      _id: organization_id,
    }, {}).then(res => {
      this.setData({
        organization: res.result[0],
        photoscr: "https://assemble-1257850266.cos.ap-nanjing.myqcloud.com/%E4%BC%9A%E5%BE%BD/" + res.result[0].name + ".png"
      });
    }).then(res => {
      var number = 0
      for (var i in this.data.organization.markers) {
        var marker = [{
          iconPath: "https://assemble-1257850266.cos.ap-nanjing.myqcloud.com/%E4%BC%9A%E5%BE%BD/" + encodeURIComponent(this.data.organization.name) + ".png",
          latitude: this.data.organization.markers[i].coordinates[1],
          longitude: this.data.organization.markers[i].coordinates[0],
          width: 50,
          height: 50,
          id: number,
        }]
        this.setData({
          markers: this.data.markers.concat(marker),
        });
        number++
      }
    });
  },

  includePointsOne() {
    const mapCtx = wx.createMapContext('map', this);
    mapCtx.includePoints({
      padding: [60, 36, 0, 36],
      points: this.data.markers,
      success: res => {
        console.log('includePoints success');
      },
      fail: err => {
        console.log('includePoints fail', err);
      }
    });
  },


  onShow: function (options) {

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
      title: this.data.organization.name,
      path: '/pages/organizationDetail/organizationDetail?organization_id=' + this.data.organization._id,
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
      title: this.data.organization.name,
      path: '/pages/organizationDetail/organizationDetail?organization_id=' + this.data.organization._id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },


  markertap(event) {
    console.log(event.detail.markerId)
    const markers = this.data.markers;
    for (let i = 0; i < markers.length; i++) {
      if (event.markerId === markers[i].id) {
        wx.openLocation({
          latitude: parseFloat(markers[i].latitude),
          longitude: parseFloat(markers[i].longitude),
          name: markers[i].name,
          address: markers[i].name
        })

      }
    }
  },

  copyBili: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['bili'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyWeibo: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['weibo'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyWechat: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['wechat'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyMail: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['mail'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyShu: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['shu'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyDouyin: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['douyin'], //需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.organization.officialAccount['miniprogram'],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  naviToMini1: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.organization.officialAccount['miniprogram1'],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})