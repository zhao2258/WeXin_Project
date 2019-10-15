const moment = require('../../utils/moment.min.js') 

Page({
  formSubmit: function (e) {
    const db = wx.cloud.database()
    db.collection('todoList').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        createDate:moment().valueOf(),
        ...e.detail.value
      }
    })
      .then(res => {
        wx.navigateBack()
      })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})