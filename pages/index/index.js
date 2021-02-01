Page({
data: { 
 organ_list:[
  {
    name:"北航关爱动物协会",
    pinyin:"beihang",
  },
  {
    name:"大咪和他的朋友们",
    pinyin:"damihe",
  },
  {
    name:"东吴狸奴居",
    pinyin:"dongwu",
  },
  {
    name:"笃行志愿服务队",
    pinyin:"duxing",
  },
  {
    name:"工程猫音",
    pinyin:"gongchengmaoyin",
  },
  {
    name:"广东医猫猫",
    pinyin:"guangdongyi",
  },
  {
    name:"广商流浪猫保护协会",
    pinyin:"guangshang",
  },
  {
    name:"江大动管",
    pinyin:"jiangda",
  },
  {
     name:"开仓放粮",
     pinyin:"kaicang",
  },
  {
    name:"清华大学学生小动物保护协会",
    pinyin:"qinghua",
  },
  {
    name:"玛珈山喵盟",
    pinyin:"majiashan",
  },
  {
    name:"萌友小动物保护协会",
    pinyin:"mengyou",
  },
  {
    name:"南审动物保护协会",
    pinyin:"nanshen",
  },
  {
    name:"SHOU小流浪后援会",
    pinyin:"SHOU",
  },  
  {
    name:"UAP动物保护协会",
    pinyin:"UAP",
  },
  {
    name:"中农关协",
    pinyin:"zhongnong",
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

  onPullDownRefresh:function(){
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
    if(e.detail.value) {
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

   naviToMini:function(e){
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

