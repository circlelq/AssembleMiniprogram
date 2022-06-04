Page({
  data: {
    organization: [
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    if (options.pageId) {
      wx.navigateTo({
        url: '/pages/organization/' + options.pageId + '/' + options.pageId,
      })
    }
    const that = this;
    const db = wx.cloud.database();
    var count = await db.collection('organization').count();
    var count = count.total;
    // console.log(count);
    var allOrganization = []

    for (let i = 0; i < count; i += 20) {
      let list = await db.collection('organization').orderBy('pinyin', 'asc').skip(i).get();
      allOrganization = allOrganization.concat(list.data)
    }
    that.setData({
      organization: allOrganization,
    });

  },

  // 点击组织
  clickOrganization(e, isOrganizationId = false) {
    const organization_id = isOrganizationId ? e : e.currentTarget.dataset.organization_id;
    // const index = this.data.organizations.findIndex(organization => organization._id == organization_id);
    const detail_url = '/pages/organizationDetail/organizationDetail';

    wx.navigateTo({
      url: detail_url + '?organization_id=' + organization_id,
    });
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

