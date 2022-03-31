// map.js
Page({

  data: {
    markers: [
      {
        id: "59",
        name: "港中深动保",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/gangzhongshen.png",
        latitude: 22.688365,
        longitude: 114.212979,
        width: 50,
        height: 50
      },
      {
        id: "58",
        name: "邮点猫饼",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/youdianmaobing.png",
        latitude: 32.081129,
        longitude: 118.771279,
        width: 50,
        height: 50
      },
      {
        id: "57",
        name: "邮点猫饼",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/youdianmaobing.png",
        latitude: 32.113683,
        longitude: 118.930829,
        width: 50,
        height: 50
      },
      {
        id: "56",
        name: "HNU喵汪",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/HNU.png",
        latitude: 28.17951,
        longitude: 112.94388,
        width: 50,
        height: 50
      },
      {
        id: "55",
        name: "六佰吸猫记",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/liubaiximaoji.png",
        latitude: 31.046378,
        longitude: 121.217452,
        width: 50,
        height: 50
      },
      {
        id: "54",
        name: "SJZU山竹团",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/SJZU.png",
        latitude: 41.743521,
        longitude: 123.515981,
        width: 50,
        height: 50
      },
      {
        id: "53",
        name: "西南交大流浪动物救助小分队",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/xinanjiaoda.png",
        latitude: 30.698742,
        longitude: 104.053029,
        width: 50,
        height: 50
      },
      {
        id: "52",
        name: "西南交大流浪动物救助小分队",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/xinanjiaoda.png",
        latitude: 30.764467,
        longitude: 103.986327,
        width: 50,
        height: 50
      },
      {
        id: "51",
        name: "这船猫",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/zhechuanmao.png",
        latitude: 30.320837,
        longitude: 120.34333,
        width: 50,
        height: 50
      },
      {
        id: "50",
        name: "神兽图鉴",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/shenshou.png",
        latitude: 39.061674,
        longitude: 117.293794,
        width: 50,
        height: 50
      },
      {
        id: "49",
        name: "NPUCAT",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/NPUCAT.png",
        latitude: 34.244415,
        longitude: 108.915456,
        width: 50,
        height: 50
      },
      {
        id: "48",
        name: "喵呜社",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/miaowushe.png",
        latitude: 23.338348,
        longitude: 113.384012,
        width: 50,
        height: 50
      },
      {
        id: "47",
        name: "浙江财经大学校园流浪天使护卫队",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/caimao.png",
        latitude: 30.320838,
        longitude: 120.395271,
        width: 50,
        height: 50
      },
      {
        id: "46",
        name: "北医猫协",
        iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/北医猫协.png",
        latitude: 39.984316,
        longitude: 116.358886,
        width: 50,
        height: 50
      },
      {
        id: "45",
        name: "西大流浪猫关爱中心",
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/xida.png",
        latitude: 29.820542,
        longitude: 106.423967,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/sit.png",
        latitude: 31.16697,
        longitude: 121.42244,
        id: "44",
        name: "SIT嗷呜流浪动物救助社",
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/sit.png",
        latitude: 30.842733,
        longitude: 121.510572,
        id: "43",
        name: "SIT嗷呜流浪动物救助社",
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/zhuaji.png",
        latitude: 30.681638,
        longitude: 103.821121,
        id: "42",
        name: "爪迹",
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/liaoda.png",
        id: "41",
        name: "辽大爱猫群众自治组织",
        latitude: 41.833903,
        longitude: 123.405549,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/liaoda.png",
        id: "40",
        name: "辽大爱猫群众自治组织",
        latitude: 41.926562,
        longitude: 123.386932,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/cufeimiao.png",
        id: "39",
        name: "粗肥喵",
        latitude: 39.959494,
        longitude: 116.342393,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/cufeimiao.png",
        id: "38",
        name: "粗肥喵",
        latitude: 40.17157,
        longitude: 116.282055,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/shangdawo.png",
        id: "37",
        name: "商大窝",
        latitude: 30.308837,
        longitude: 120.388953,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/ustc.png",
        id: "36",
        name: "科大猫咪",
        latitude: 31.843821,
        longitude: 117.268886,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/ustc.png",
        id: "35",
        name: "科大猫咪",
        latitude: 31.839239,
        longitude: 117.263567,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/ustc.png",
        id: "34",
        name: "科大猫咪",
        latitude: 31.821708,
        longitude: 117.281467,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/ustc.png",
        id: "33",
        name: "科大猫咪",
        latitude: 31.838365,
        longitude: 117.255554,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/ustc.png",
        id: "32",
        name: "科大猫咪",
        latitude: 31.837073,
        longitude: 117.26956,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/beifanggongda.png",
        id: "31",
        name: "北方工大猫协",
        latitude: 39.928274,
        longitude: 116.207969,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/tianshimaoxie.png",
        id: "30",
        name: "天师猫协",
        latitude: 39.063104,
        longitude: 117.12575,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/nanjingyishu.png",
        id: "29",
        name: "南京艺术学院猫咪救助站",
        latitude: 32.062595,
        longitude: 118.753377,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/jnu.png",
        id: "28",
        name: "JNU流浪猫救助管理站",
        latitude: 23.017606,
        longitude: 113.415266,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/jnu.png",
        id: "27",
        name: "JNU流浪猫救助管理站",
        latitude: 23.131479,
        longitude: 113.347981,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/chongyou.png",
        id: "26",
        name: "重邮猫咪星球",
        latitude: 29.532326,
        longitude: 106.607960,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/misen.png",
        id: "25",
        name: "米森动物保护协会",
        latitude: 23.202090,
        longitude: 113.381100,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/damihe.png",
        id: "24",
        name: "大咪和他的朋友们",
        latitude: 43.823700,
        longitude: 125.277184,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/damihe.png",
        id: "23",
        name: "大咪和他的朋友们",
        latitude: 43.910283,
        longitude: 125.267054,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/dongwu.png",
        id: "22",
        name: "东吴狸奴居",
        latitude: 31.305545,
        longitude: 120.640132,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/dongwu.png",
        id: "21",
        name: "东吴狸奴居",
        latitude: 31.385012,
        longitude: 120.6787115,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/UAP.png",
        id: "20",
        name: "UAP动物保护协会",
        latitude: 31.9029922,
        longitude: 118.918108,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/SHOU.png",
        id: "19",
        name: "SHOU小流浪后援会",
        latitude: 30.883000,
        longitude: 121.896940,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/guangshang.png",
        id: "18",
        name: "广商流浪猫保护协会",
        latitude: 23.303130,
        longitude: 113.568130,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/gongchengmaoyin.png",
        id: "17",
        name: "工程猫音",
        latitude: 45.775790,
        longitude: 126.682190,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/dongwu.png",
        id: "16",
        name: "东吴狸奴居",
        latitude: 31.268074,
        longitude: 120.732744,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/nanshen.png",
        id: "15",
        name: "南审动物保护协会",
        latitude: 32.062851,
        longitude: 118.608421,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/majiashan.png",
        id: "14",
        name: "玛珈山喵盟",
        latitude: 37.532287,
        longitude: 122.058250,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/mengyou.png",
        id: "13",
        name: "萌友小动物保护协会",
        latitude: 31.031482,
        longitude: 121.4537268,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/guangdongyi.png",
        id: "12",
        name: "广东医猫猫",
        latitude: 22.923274,
        longitude: 113.864571,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/zhongnong.png",
        id: "11",
        name: "中农关协",
        latitude: 40.005006,
        longitude: 116.357164,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/zhongnong.png",
        id: "10",
        name: "中农关协",
        latitude: 40.026808,
        longitude: 116.282824,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/duxing.png",
        id: "9",
        name: "笃行志愿服务队",
        latitude: 23.065118,
        longitude: 113.390597,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/duxing.png",
        id: "8",
        name: "笃行志愿服务队",
        latitude: 23.096717,
        longitude: 113.298399,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/duxing.png",
        id: "7",
        name: "笃行志愿服务队",
        latitude: 23.200489,
        longitude: 113.292419,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/duxing.png",
        id: "6",
        name: "笃行志愿服务队",
        latitude: 23.063969,
        longitude: 113.397682,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/duxing.png",
        id: "5",
        name: "笃行志愿服务队",
        latitude: 23.158311,
        longitude: 113.358473,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/jiangda.png",
        id: "4",
        name: "江大动管",
        latitude: 32.199320,
        longitude: 119.514280,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/qinghua.png",
        id: "3",
        name: "清华大学学生小动物保护协会",
        latitude: 40.003661,
        longitude: 116.326510,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/beihang.png",
        id: "2",
        name: "北航关爱动物协会",
        latitude: 39.981795,
        longitude: 116.347127,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/beihang.png",
        id: "1",
        name: "北航关爱动物协会",
        latitude: 40.153517,
        longitude: 116.270252,
        width: 50,
        height: 50
      },
      {
        iconPath: "cloud://circle-test-zdk23.6369-circle-test-zdk23-1259206269/会徽/kaicang.png",
        id: "0",
        name: "开仓放粮",
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
          fail: (res) => { },
          complete: (res) => { },
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