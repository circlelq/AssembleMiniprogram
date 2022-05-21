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
    markers: [
      {
        id: 1,
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/beiyi.png",
        latitude: 39.984316,
        longitude: 116.358886,
        width: 50,
        height: 50,
      },
    ],


    controls: [{
      id: 1,
      iconPath: '/pages/images/circle.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    organization_id = options.organization_id;
    const that = this;
    console.log("加载detail页码");
    // console.log(organization_id);

    that.loadOrganization();


  },

  loadOrganization() {
    const db = wx.cloud.database();
    db.collection('organization').doc(organization_id).get().then(res => {
      console.log(res);
      res.data.photo = [];
      // res.data.characteristics_string = [(res.data.colour || '') + '猫'].conorgan(res.data.characteristics || []).join('，');
      res.data.characteristics_string = (res.data.colour || '') + '猫';
      // res.data.nickname = (res.data.nickname || []).join('、');
      // console.log(res.data),

      this.setData({
        organization: res.data,

      });
    });

    for (var i = 0; i <= this.data.markers.length; ++i) {
      console.log(i)
    }


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
      data: this.data.organization.officialAccount[0],//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },
  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: this.data.organization.miniprogramId[0],
      // path: 'pages/index/index',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }

})


