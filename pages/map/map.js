// map.js
Page({      

  data: {
    markers: [
      {
        iconPath: "/pages/images/gongchengmaoyin.png",
        id:"17",
        name:"工程猫音",
        latitude: 45.775790,
        longitude: 126.682190,
        width: 50,
        height: 50
      },{
        iconPath: "/pages/images/dongwu.png",
        id:"16",
        name:"东吴狸奴居",
        latitude: 31.268074,
        longitude: 120.732744,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/nanshen.png",
        id:"15",
        name:"南审动物保护协会",
        latitude: 32.062851,
        longitude: 118.608421,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/majiashan.png",
        id:"14",
        name:"玛珈山喵盟",
        latitude: 37.532287,
        longitude: 122.058250,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/mengyou.png",
        id:"13",
        name:"萌友小动物保护协会",
        latitude: 31.031482,
        longitude: 121.4537268,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/guangdongyi.png",
        id:"12",
        name:"广东医猫猫",
        latitude: 22.923274,
        longitude: 113.864571,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/zhongnong.png",
        id:"11",
        name:"中农关协",
        latitude: 40.005006,
        longitude: 116.357164,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/zhongnong.png",
        id:"10",
        name:"中农关协",
        latitude: 40.026808,
        longitude: 116.282824,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/duxing.png",
        id:"9",
        name:"笃行志愿服务队",
        latitude: 23.065118,
        longitude: 113.390597,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/duxing.png",
        id:"8",
        name:"笃行志愿服务队",
        latitude: 23.096717,
        longitude: 113.298399,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/duxing.png",
        id:"7",
        name:"笃行志愿服务队",
        latitude: 23.200489,
        longitude: 113.292419,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/duxing.png",
        id:"6",
        name:"笃行志愿服务队",
        latitude: 23.063969,
        longitude: 113.397682,
        width: 50,
        height: 50
      },
      {
        iconPath: "/pages/images/duxing.png",
        id:"5",
        name:"笃行志愿服务队",
        latitude: 23.158311,
        longitude: 113.358473,
        width: 50,
        height: 50
      },
    {
      iconPath: "/pages/images/jiangda.png",
      id:"4",
      name:"江大动管",
      latitude: 32.199320,
      longitude: 119.514280,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/qinghua.png",
      id:"3",
      name:"清华大学学生小动物保护协会",
      latitude: 40.003661,
      longitude: 116.326510,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/beihang.png",
      id:"2",
      name:"北航关爱动物协会",
      latitude: 39.981795,
      longitude: 116.347127,
      width: 50,
      height: 50
    },
    {
      iconPath: "/pages/images/beihang.png",
      id:"1",
      name:"北航关爱动物协会",
      latitude: 40.153517,
      longitude: 116.270252,
      width: 50,
      height: 50
    },
    {
    iconPath: "/pages/images/kaicang.png",
    id:"0",
    name:"开仓放粮",
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