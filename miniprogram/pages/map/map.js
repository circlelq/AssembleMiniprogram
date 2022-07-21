// map.js
const app = getApp();

Page({

  data: {
    markers: [
    ],
    allOrganization: {}
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(event) {
    console.log(event.detail.markerId)
    const markers = this.data.markers;
    for (let i = 0; i < markers.length; i++) {
      if (event.markerId === markers[i].id) {
        console.log(event.detail.markerId)
        wx.navigateTo({
          url: '/pages/organizationDetail/organizationDetail' + '?organization_id=' + markers[i].organization_id,
          success: (result) => {
            console.log("成功跳转");
          },
          fail: (res) => { },
          complete: (res) => { },
        })

      }
    }
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: async function (options) {

    app.mpServerless.db.collection('organization').find(
      {},
      {   }
    ).then(res => {
      const { result: allOrganization } = res;
      this.setData({ allOrganization: allOrganization});
    }).then(res => {

    var number = 0
    for (var organizationNum in this.data.allOrganization) {
      for (var i in this.data.allOrganization[organizationNum].markers) {
        var marker = [
          {
            iconPath: "https://assemble-1257850266.cos.ap-nanjing.myqcloud.com/%E4%BC%9A%E5%BE%BD/" + encodeURIComponent(this.data.allOrganization[organizationNum].name) + ".png",
            latitude: this.data.allOrganization[organizationNum].markers[i].coordinates[1],
            longitude: this.data.allOrganization[organizationNum].markers[i].coordinates[0],
            joinCluster: true,
            width: 50,
            height: 50,
            organization_id: this.data.allOrganization[organizationNum]._id,
            id: number,
          }
        ]
        this.setData({
          markers: this.data.markers.concat(marker),
        });
        number++
      }
    }
  }).then(res => {

    const mapCtx = wx.createMapContext('map', this);
    mapCtx.includePoints({
      padding: [60, 36, 0, 36],
      points: this.data.markers,
      success: res => {
        console.log('includePoints success');
        mapCtx.initMarkerCluster({
          gridSize: 14,
          success: res => {
            console.log('initMarkerCluster success');
          },
          fail: err => {
            console.log('initMarkerCluster fail', err);
          }
        });
      },
      fail: err => {
        console.log('includePoints fail', err);
      }
    });
  })
  },

  controltap(e) {
    console.log(e.detail.controlId)
  },
  //转发功能
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    if (res.from === 'button') { }
    return {
      path: 'pages/map/map',  // 路径，传递参数到指定页面。
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
      path: 'pages/map/map',  // 路径，传递参数到指定页面。
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

})