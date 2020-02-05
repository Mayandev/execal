// pages/more/more.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
      programs: [
        {
          title: '校徽头像制作',
          description: '一键制作精美校徽头像',
          path: 'pages/index/index',
          avatarUrl: '/images/avatar_change.jpg',
          appId: 'wx97cf6ae4c7902b8f'
        },
        {
          title: '赞赏一下',
          description: '一键快速赞赏',
          path: 'pages/apps/largess/detail?accountId=3118640',
          avatarUrl: '/images/give_zan.png',
          appId: 'wx18a2ac992306a5a4'
        }

      ],
      loadingHidden: false
  },

    // 分享回掉函数
    onShareAppMessage: function () {
        // 用户点击右上角分享  
        return {
            title: '点击算算我的体测成绩🏃‍', // 分享标题  
            desc: '点击算算我的体测成绩🏃‍', // 分享描述  
            path: 'pages/index/index' // 分享路径  
        }
    }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-84bf9f0a80fd7374'
      })
    }
      console.log('onload');
      var that = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      });
      //捕捉错误
      interstitialAd.onError(err => {
        console.log(err);
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})