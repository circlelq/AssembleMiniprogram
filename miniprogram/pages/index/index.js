Page({
  data: {
    organ_list: [
      {
        name: "北医猫协",
        pinyin: "beiyi",
      },
      {
        name: "北方工大猫协",
        pinyin: "beifanggongda",
      },
      {
        name: "北航关爱动物协会",
        pinyin: "beihang",
      },
      {
        name: "粗肥喵",
        pinyin: "cufeimiao",
      },
      {
        name: "重邮猫咪星球",
        pinyin: "chongyou",
      },
      {
        name: "南传猫协",
        pinyin: "CUCN",
      },
      {
        name: "大黄的山竹铺子",
        pinyin: "dahuangdeshanzhupuzi",
      },
      {
        name: "大咪和他的朋友们",
        pinyin: "damihe",
      },
      {
        name: "东吴狸奴居",
        pinyin: "dongwu",
      },
      {
        name: "笃行志愿服务队",
        pinyin: "duxing",
      },
      {
        name: "工程猫音",
        pinyin: "gongchengmaoyin",
      },
      {
        name: "广东医猫猫",
        pinyin: "guangdongyi",
      },
      {
        name: "广商流浪猫保护协会",
        pinyin: "guangshang",
      },
      {
        name: "港中深动保",
        pinyin: "gangzhongshen",
      },
      {
        name: "HNU喵汪",
        pinyin: "HNU",
      },
      {
        name: "湖师云养猫",
        pinyin: "hushiyunyangmao",
      },
      {
        name: "江大动管",
        pinyin: "jiangda",
      },
      {
        name: "JNU流浪猫救助管理站",
        pinyin: "jnu",
      },
      {
        name: "开仓放粮",
        pinyin: "kaicang",
      },
      {
        name: "科大猫咪",
        pinyin: "ustc",
      },
      {
        name: "六佰吸猫记",
        pinyin: "liubaiximaoji",
      },
      {
        name: "辽大爱猫群众自治组织",
        pinyin: "liaoda",
      },
      {
        name: "玛珈山喵盟",
        pinyin: "majiashan",
      },
      {
        name: "米森动物保护协会",
        pinyin: "misen",
      },
      {
        name: "喵呜社",
        pinyin: "miaowushe",
      },
      {
        name: "萌友小动物保护协会",
        pinyin: "mengyou",
      },
      {
        name: "南京艺术学院猫咪救助站",
        pinyin: "nanjingyishu",
      },
      {
        name: "NPUCAT",
        pinyin: "NPUCAT",
      },
      {
        name: "南审动物保护协会",
        pinyin: "nanshen",
      },
      {
        name: "清华大学学生小动物保护协会",
        pinyin: "qinghua",
      },
      {
        name: "深大动物保护平台",
        pinyin: "shendadongwu",
      },
      {
        name: "商大窝",
        pinyin: "shangdawo",
      },
      {
        name: "SJZU山竹团",
        pinyin: "SJZU",
      },
      {
        name: "SIT嗷呜流浪动物救助社",
        pinyin: "sit",
      },
      {
        name: "SHOU小流浪后援会",
        pinyin: "SHOU",
      },
      {
        name: "神兽图鉴",
        pinyin: "shenshou",
      },
      {
        name: "天师猫协",
        pinyin: "tianshimaoxie",
      },
      {
        name: "UAP动物保护协会",
        pinyin: "UAP",
      },
      {
        name: "万柳猫猫之家",
        pinyin: "wanliumeow",
      },
      {
        name: "西大流浪猫关爱中心",
        pinyin: "xida",
      },
      {
        name: "西南交大流浪动物救助小分队",
        pinyin: "xinanjiaoda",
      },
      {
        name: "邮点猫饼",
        pinyin: "youdianmaobing",
      },
      {
        name: "爪迹",
        pinyin: "zhuaji",
      },
      {
        name: "浙江财经大学校园流浪天使护卫队",
        pinyin: "caimao",
      },
      {
        name: "这船猫",
        pinyin: "zhechuanmao",
      },
      {
        name: "中农关协",
        pinyin: "zhongnong",
      },
    ],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      wx.navigateTo({
        url: '/pages/organization/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
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

  // 转发到朋友圈
  onShareTimeline: function (res) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
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

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if (e.detail.value) {
      wx.navigateTo({
        url: '/pages/organization/' + e.detail.value + '/' + e.detail.value,
      })
    }
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

  naviToMini: function (e) {
    wx.navigateToMiniProgram({
      appId: '',
      path: 'page/index/index?id=123',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  }


})

