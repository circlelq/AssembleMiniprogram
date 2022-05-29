//index.js

var organization_id = "1";
const setting = {
  skew: 0,
  rotate: 90,
  showLocation: false,
  showScale: false,
  subKey: '',
  layerStyle: 1,
  enableZoom: true,
  enableScroll: true,
  enableRotate: false,
  showCompass: false,
  enable3D: false,
  enableOverlooking: false,
  enableSatellite: false,
  enableTraffic: false,
}
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
    console.log("加载detail页码");
    // console.log(organization_id);
    const db = wx.cloud.database();
    db.collection('organization').doc(organization_id).get().then(res => {
      console.log(res);

      this.setData({
        organization: res.data,
        photoscr: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/" + res.data.name + ".png"
      });
    }).then(res => {
      var number = 0
      for (var i in this.data.organization.markers) {
        var marker = [
          {
            iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/" + encodeURIComponent(this.data.organization.name) + ".png",
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
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.organization.officialAccount['miniprogram'],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})


