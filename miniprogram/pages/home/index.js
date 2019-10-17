const app = getApp()
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    ismask: ''
  },
  gotoBtnView: function () {
    wx.switchTab({
      url: '../map/map'
    })
  },
  onLoad: function() {
    app.publicFunction() // 调用app里面的公共的方法
    wx.getWeRunData({
      success(res) {
        // 拿 encryptedData 到开发者后台解密开放数据
        const encryptedData = res.encryptedData
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID
        // console.log('wx sport', res, encryptedData, cloudID)
      }
    })
    // wx.getSetting({
    //   success: res => {
    //     console.log('setting',)
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           console.log('登陆信息', res)
    //           this.setData({
    //             ismask: 'none'
    //           });

    //         }
    //       })
    //     } else {
    //       this.setData({
    //         ismask: 'block'
    //       });
    //     }
    //   }
    // })
  },
  closeHide: function (e) {
    this.setData({
      ismask: 'none'
    });
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})
