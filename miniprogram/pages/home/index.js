Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  gotoBtnView: function () {
    wx.switchTab({
      url: '../map/map'
    })
  },
  onLoad: function() {
    // 创建数据库实例
    // const db = wx.cloud.database()
    // // 2. 构造查询语句
    // // collection 方法获取一个集合的引用
    // // 可以使用where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等）
    // // get 方法会触发网络请求，往数据库取数据
    // db.collection('test_project').get({
    //   success(res) {
    //     console.log(res)
    //   }
    // })

   

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('用户数据',res)
              wx.cloud.callFunction({
                // 云函数名称
                name: 'Add',
                // 传给云函数的参数
                data: {
                  avatarUrl: res.userInfo.avatarUrl,
                  userInfo: res.userInfo
                },
              })
                .then(res => {
                  console.log(res.result) // 3
                })
                .catch(console.error)

              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

})
