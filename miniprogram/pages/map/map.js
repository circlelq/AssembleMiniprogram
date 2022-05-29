// map.js
Page({

  data: {
    markers: [
      // {
      //   id: "70",
      //   name: "杏林猫事",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/xinlinmaoshi.png",
      //   latitude: 23.058361,
      //   longitude: 113.404595,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "69",
      //   name: "杏林猫事",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/xinlinmaoshi.png",
      //   latitude: 23.156026,
      //   longitude: 113.267124,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "68",
      //   name: "HUT猫协",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/HUTmaoxie.png",
      //   latitude: 27.817843,
      //   longitude: 113.10669,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "67",
      //   name: "万柳猫猫之家",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/wanliumeow.png",
      //   latitude: 39.961041,
      //   longitude: 116.297433,
      //   width: 50,
      //   height: 50
      // },
      // { // 石牌校区
      //   id: "66",
      //   name: "大黄的山竹铺子",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
      //   latitude: 23.13935,
      //   longitude: 113.352078,
      //   width: 50,
      //   height: 50
      // },
      // {// {大学城校区
      //   id: "65",
      //   name: "大黄的山竹铺子",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
      //   latitude: 23.052559,
      //   longitude: 113.380095,
      //   width: 50,
      //   height: 50
      // },
      // {// {南海校区
      //   id: "64",
      //   name: "大黄的山竹铺子",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dahuangdeshanzhupuzi.png",
      //   latitude: 23.146853,
      //   longitude: 113.028152,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "63",
      //   name: "深大动物保护平台",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/shendadongwu.png",
      //   latitude: 22.530316,
      //   longitude: 113.942214,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "62",
      //   name: "深大动物保护平台",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/shendadongwu.png",
      //   latitude: 22.532742,
      //   longitude: 113.936696,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "61",
      //   name: "深大动物保护平台",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/shendadongwu.png",
      //   latitude: 22.596803,
      //   longitude: 113.992756,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "60",
      //   name: "南传猫协",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/CUCN.png",
      //   latitude: 31.884658,
      //   longitude: 118.888672,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "59",
      //   name: "港中深动保",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/gangzhongshen.png",
      //   latitude: 22.688365,
      //   longitude: 114.212979,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "58",
      //   name: "邮点猫饼",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/youdianmaobing.png",
      //   latitude: 32.081129,
      //   longitude: 118.771279,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "57",
      //   name: "邮点猫饼",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/youdianmaobing.png",
      //   latitude: 32.113683,
      //   longitude: 118.930829,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "56",
      //   name: "HNU喵汪",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/HNU.png",
      //   latitude: 28.17951,
      //   longitude: 112.94388,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "55",
      //   name: "六佰吸猫记",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/liubaiximaoji.png",
      //   latitude: 31.046378,
      //   longitude: 121.217452,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "54",
      //   name: "SJZU山竹团",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/SJZU.png",
      //   latitude: 41.743521,
      //   longitude: 123.515981,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "53",
      //   name: "西南交大流浪动物救助小分队",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/xinanjiaoda.png",
      //   latitude: 30.698742,
      //   longitude: 104.053029,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "52",
      //   name: "西南交大流浪动物救助小分队",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/xinanjiaoda.png",
      //   latitude: 30.764467,
      //   longitude: 103.986327,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "51",
      //   name: "这船猫",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/zhechuanmao.png",
      //   latitude: 30.320837,
      //   longitude: 120.34333,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "50",
      //   name: "神兽图鉴",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/shenshou.png",
      //   latitude: 39.061674,
      //   longitude: 117.293794,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "49",
      //   name: "NPUCAT",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/NPUCAT.png",
      //   latitude: 34.244415,
      //   longitude: 108.915456,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "48",
      //   name: "喵呜社",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/miaowushe.png",
      //   latitude: 23.338348,
      //   longitude: 113.384012,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "47",
      //   name: "浙江财经大学校园流浪天使护卫队",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/caimao.png",
      //   latitude: 30.320838,
      //   longitude: 120.395271,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "46",
      //   name: "北医猫协",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/北医猫协.png",
      //   latitude: 39.984316,
      //   longitude: 116.358886,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   id: "45",
      //   name: "西大流浪猫关爱中心",
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/xida.png",
      //   latitude: 29.820542,
      //   longitude: 106.423967,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/sit.png",
      //   latitude: 31.16697,
      //   longitude: 121.42244,
      //   id: "44",
      //   name: "SIT嗷呜流浪动物救助社",
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/sit.png",
      //   latitude: 30.842733,
      //   longitude: 121.510572,
      //   id: "43",
      //   name: "SIT嗷呜流浪动物救助社",
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/zhuaji.png",
      //   latitude: 30.681638,
      //   longitude: 103.821121,
      //   id: "42",
      //   name: "爪迹",
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/liaoda.png",
      //   id: "41",
      //   name: "辽大爱猫群众自治组织",
      //   latitude: 41.833903,
      //   longitude: 123.405549,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/liaoda.png",
      //   id: "40",
      //   name: "辽大爱猫群众自治组织",
      //   latitude: 41.926562,
      //   longitude: 123.386932,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/cufeimiao.png",
      //   id: "39",
      //   name: "粗肥喵",
      //   latitude: 39.959494,
      //   longitude: 116.342393,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/cufeimiao.png",
      //   id: "38",
      //   name: "粗肥喵",
      //   latitude: 40.17157,
      //   longitude: 116.282055,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/shangdawo.png",
      //   id: "37",
      //   name: "商大窝",
      //   latitude: 30.308837,
      //   longitude: 120.388953,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/ustc.png",
      //   id: "36",
      //   name: "科大猫咪",
      //   latitude: 31.843821,
      //   longitude: 117.268886,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/ustc.png",
      //   id: "35",
      //   name: "科大猫咪",
      //   latitude: 31.839239,
      //   longitude: 117.263567,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/ustc.png",
      //   id: "34",
      //   name: "科大猫咪",
      //   latitude: 31.821708,
      //   longitude: 117.281467,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/ustc.png",
      //   id: "33",
      //   name: "科大猫咪",
      //   latitude: 31.838365,
      //   longitude: 117.255554,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/ustc.png",
      //   id: "32",
      //   name: "科大猫咪",
      //   latitude: 31.837073,
      //   longitude: 117.26956,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/beifanggongda.png",
      //   id: "31",
      //   name: "北方工大猫协",
      //   latitude: 39.928274,
      //   longitude: 116.207969,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/tianshimaoxie.png",
      //   id: "30",
      //   name: "天师猫协",
      //   latitude: 39.063104,
      //   longitude: 117.12575,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/nanjingyishu.png",
      //   id: "29",
      //   name: "南京艺术学院猫咪救助站",
      //   latitude: 32.062595,
      //   longitude: 118.753377,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/jnu.png",
      //   id: "28",
      //   name: "JNU流浪猫救助管理站",
      //   latitude: 23.017606,
      //   longitude: 113.415266,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/jnu.png",
      //   id: "27",
      //   name: "JNU流浪猫救助管理站",
      //   latitude: 23.131479,
      //   longitude: 113.347981,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/chongyou.png",
      //   id: "26",
      //   name: "重邮猫咪星球",
      //   latitude: 29.532326,
      //   longitude: 106.607960,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/misen.png",
      //   id: "25",
      //   name: "米森动物保护协会",
      //   latitude: 23.202090,
      //   longitude: 113.381100,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/damihe.png",
      //   id: "24",
      //   name: "大咪和他的朋友们",
      //   latitude: 43.823700,
      //   longitude: 125.277184,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/damihe.png",
      //   id: "23",
      //   name: "大咪和他的朋友们",
      //   latitude: 43.910283,
      //   longitude: 125.267054,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dongwu.png",
      //   id: "22",
      //   name: "东吴狸奴居",
      //   latitude: 31.305545,
      //   longitude: 120.640132,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dongwu.png",
      //   id: "21",
      //   name: "东吴狸奴居",
      //   latitude: 31.385012,
      //   longitude: 120.6787115,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/UAP.png",
      //   id: "20",
      //   name: "UAP动物保护协会",
      //   latitude: 31.9029922,
      //   longitude: 118.918108,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/SHOU.png",
      //   id: "19",
      //   name: "SHOU小流浪后援会",
      //   latitude: 30.883000,
      //   longitude: 121.896940,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/guangshang.png",
      //   id: "18",
      //   name: "广商流浪猫保护协会",
      //   latitude: 23.303130,
      //   longitude: 113.568130,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/gongchengmaoyin.png",
      //   id: "17",
      //   name: "工程猫音",
      //   latitude: 45.775790,
      //   longitude: 126.682190,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/dongwu.png",
      //   id: "16",
      //   name: "东吴狸奴居",
      //   latitude: 31.268074,
      //   longitude: 120.732744,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/nanshen.png",
      //   id: "15",
      //   name: "南审动物保护协会",
      //   latitude: 32.062851,
      //   longitude: 118.608421,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/majiashan.png",
      //   id: "14",
      //   name: "玛珈山喵盟",
      //   latitude: 37.532287,
      //   longitude: 122.058250,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/mengyou.png",
      //   id: "13",
      //   name: "萌友小动物保护协会",
      //   latitude: 31.031482,
      //   longitude: 121.4537268,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/guangdongyi.png",
      //   id: "12",
      //   name: "广东医猫猫",
      //   latitude: 22.923274,
      //   longitude: 113.864571,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/zhongnong.png",
      //   id: "11",
      //   name: "中农关协",
      //   latitude: 40.005006,
      //   longitude: 116.357164,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/zhongnong.png",
      //   id: "10",
      //   name: "中农关协",
      //   latitude: 40.026808,
      //   longitude: 116.282824,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/duxing.png",
      //   id: "9",
      //   name: "笃行志愿服务队",
      //   latitude: 23.065118,
      //   longitude: 113.390597,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/duxing.png",
      //   id: "8",
      //   name: "笃行志愿服务队",
      //   latitude: 23.096717,
      //   longitude: 113.298399,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/duxing.png",
      //   id: "7",
      //   name: "笃行志愿服务队",
      //   latitude: 23.200489,
      //   longitude: 113.292419,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/duxing.png",
      //   id: "6",
      //   name: "笃行志愿服务队",
      //   latitude: 23.063969,
      //   longitude: 113.397682,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/duxing.png",
      //   id: "5",
      //   name: "笃行志愿服务队",
      //   latitude: 23.158311,
      //   longitude: 113.358473,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/jiangda.png",
      //   id: "4",
      //   name: "江大动管",
      //   latitude: 32.199320,
      //   longitude: 119.514280,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/qinghua.png",
      //   id: "3",
      //   name: "清华大学学生小动物保护协会",
      //   latitude: 40.003661,
      //   longitude: 116.326510,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/beihang.png",
      //   id: "2",
      //   name: "北航关爱动物协会",
      //   latitude: 39.981795,
      //   longitude: 116.347127,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/beihang.png",
      //   id: "1",
      //   name: "北航关爱动物协会",
      //   latitude: 40.153517,
      //   longitude: 116.270252,
      //   width: 50,
      //   height: 50
      // },
      // {
      //   iconPath: "https://6369-circle-test-zdk23-1259206269.tcb.qcloud.la/%E4%BC%9A%E5%BE%BD/kaicang.png",
      //   id: "0",
      //   name: "开仓放粮",
      //   latitude: 31.054762,
      //   longitude: 121.196128,
      //   width: 50,
      //   height: 50
      // },
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
  onLoad: function (options) {
    const that = this;
    console.log("加载detail页码");
    // console.log(organization_id);
    const db = wx.cloud.database();
    db.collection('organization').orderBy('name', 'asc').get().then(res => {
      console.log(res);
      this.setData({
        allOrganization: res['data'],
      });
    }).then(res => {
      var number = 0
      for (var organizationNum in this.data.allOrganization) {
        console.log(this.data.allOrganization[organizationNum])
        for (var i in this.data.allOrganization[organizationNum].markers) {
          console.log(this.data.allOrganization[organizationNum]._id)
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
      console.log(this.data.markers);
    });

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