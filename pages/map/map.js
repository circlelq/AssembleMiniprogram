// map.js
Page({
  data: {
    markers: [
    {
      iconPath: "/pages/images/beihang.png",
      name:"北航关爱动物协会",
      id: 2,
      latitude: 39.981795,
      longitude: 116.347127,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/beihang.png",
      name:"北航关爱动物协会",
      id: 1,
      latitude: 40.153517,
      longitude: 116.270252,
      width: 50,
      height: 50
    },
    {
    iconPath: "/pages/images/kaicang.png",
    name:"开仓放粮",
    id: 0,
    latitude: 31.054762,
    longitude: 121.196128,
    width: 50,
    height: 50
  },
  ],

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(event) {
    console.log(event.detail.markerId)
    const markers = this.data.markers;
		for (let i = 0; i < markers.length; i++) { // 本示例只有一个marker，可用于处理单marker和多marker情况
			if (event.markerId === markers[i].id) {
        wx.navigateTo({
          url: '/pages/organization/' + markers[i].name + '/' + markers[i].name,
          success: (result) => {
            console.log("成功跳转");
          },
          fail: (res) => {},
          complete: (res) => {},
        })
				// qqmapsdk.reverseGeocoder({ // 调用逆地址解析
				// 	location: {
				// 		latitude: markers[i].latitude,
				// 		longitude: markers[i].longitude
				// 	},
				// 	success: res => {
				// 		if (res.result && res.result.formatted_addresses) { // 避免名称无数据处理
				// 			this.setData({
				// 				markerCallbackTxt: res.result.formatted_addresses.recommend
				// 			});
				// 		} else {
				// 			this.setData({
				// 				markerCallbackTxt: res.result.address
				// 			});
				// 		}
				// 	}
				// });
			}
		}
  },
  controltap(e) {
    console.log(e.detail.controlId)
  }
})