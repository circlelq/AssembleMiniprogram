const app = getApp();

Page({
  data: {
    organization: [],
    inputValue: "NaN",
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
    app.mpServerless.db.collection('organization').find({
      name: {
        $regex: this.data.inputValue
      }
    }, {
      sort: {
        pinyin: 1
      },
      // skip: organization.length,
      // limit: 20,
    }).then(res => {
      const {
        result: data
      } = res;
      this.setData({
        organization: data
      });
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

  bindKeyInput: function (e) {
    if (e.detail.value == "") {
      this.setData({
        inputValue: "NaN"
      })
    } else {
      this.setData({
        inputValue: "(?i)" + e.detail.value
      })
    }
    this.loadMoreOrganization();
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    if (e.detail.value) {
      const organization = this.data.organization;
      app.mpServerless.db.collection('organization').find({
        name: e.detail.value
      }, {}).then(res => {
        wx.navigateTo({
          url: '/pages/organizationDetail/organizationDetail?organization_id=' + res.result[0]._id,
        })
      }).catch(console.error);
    }
  },
})