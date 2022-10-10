const app = getApp();

Page({
  data: {
    organization: [
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.pageId) {
      wx.navigateTo({
        url: '/pages/organization/' + options.pageId + '/' + options.pageId,
      })
    }
    this.loadMoreOrganization();
  },

  loadMoreOrganization() {

    const organization = this.data.organization;
    app.mpServerless.db.collection('organization').find(
      {},
      {
        sort: { pinyin: 1 },
        skip: organization.length,
        limit: 20,
      }
    ).then(res => {
      const { result: data } = res;
      this.setData({ organization: organization.concat(data) });
    }).catch(console.error);


  },

  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    this.loadMoreOrganization();
  },

  // 点击组织
  clickOrganization(e, isOrganizationId = false) {
    const organization_id = isOrganizationId ? e : e.currentTarget.dataset.organization_id;
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

})

