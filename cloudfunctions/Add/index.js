// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     sum: event.a + event.b,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }

exports.main = async (event, context) => {
  return await db.collection('test_project').add({
    data: {
      avatarUrl: event.avatarUrl,
      userInfo: event.userInfo
    },
    success: function (res) {
      wx.showToast({
        title: "添加成功",
        duration: 2000
      })
    },
    fail: function (res) {
      wx.showToast({
        title: "添加失败",
        duration: 2000
      })
    }
  })
}