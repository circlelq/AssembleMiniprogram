// map.js
Page({

  data: {
    markers: [
    ],

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
    const that = this;
    console.log("加载detail页码");
    // console.log(organization_id);
    const db = wx.cloud.database();
    var count = await db.collection('organization').count();
    var count = count.total;
    // console.log(count);
    var allOrganization = []
    for (let i = 0; i < count; i += 20) {
      let list = await db.collection('organization').orderBy('pinyin', 'asc').skip(i).get();
      allOrganization = allOrganization.concat(list.data)
    }
    this.setData({
      allOrganization: allOrganization,
    })
    var number = 0
    for (var organizationNum in this.data.allOrganization) {
      // console.log(this.data.allOrganization[organizationNum])
      for (var i in this.data.allOrganization[organizationNum].markers) {
        // console.log(this.data.allOrganization[organizationNum]._id)
        var marker = [
          {
            iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/" + encodeURIComponent(this.data.allOrganization[organizationNum].name) + ".png",
            latitude: this.data.allOrganization[organizationNum].markers[i].latitude,
            longitude: this.data.allOrganization[organizationNum].markers[i].longitude,
            width: 50,
            height: 50,
            organization_id: this.data.allOrganization[organizationNum]._id,
            id: number,
          }
        ]
        this.setData({
          markers: this.data.markers.concat(marker),
        });
        // console.log(this.data.markers)
        number++
      }
    }
    // console.log(this.data.markers);


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