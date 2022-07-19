var organization_id = "1";

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
    const that = this;
    // console.log(organization_id);
    const db = wx.cloud.database();
    db.collection('organization').doc(organization_id).get().then(res => {
      this.setData({
        organization: res.data,
        photoscr: "https://gitee.com/circlelq/AssembleMiniprogram/raw/master/会徽/" + res.data.name + ".png"
      });
    }).then(res => {
      var number = 0
      for (var i in this.data.organization.markers) {
        var marker = [
          {
            iconPath: "https://gitee.com/circlelq/AssembleMiniprogram/raw/master/会徽/" + encodeURIComponent(this.data.organization.name) + ".png",
            latitude: this.data.organization.markers[i].latitude,
            longitude: this.data.organization.markers[i].longitude,
            width: 50,
            height: 50,
            id: number,
          }
        ]
        this.setData({
          markers: this.data.markers.concat(marker),
        });
        // console.log(this.data.markers)
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

  copyBili: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['bili'],//需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyWeibo: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['weibo'],//需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyWechat: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['wechat'],//需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyMail: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['mail'],//需要复制的内容
      success: function (res) {
        console.log("复制成功")
      }
    })
  },
  copyShu: function (e) {
    var self = this;
    wx.setClipboardData({
      data: this.data.organization.officialAccount['shu'],//需要复制的内容
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


