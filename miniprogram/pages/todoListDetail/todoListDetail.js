const moment = require('../../utils/moment.min.js') 

Page({
  data:{
    detailData:{}
  },
  onLoad: function (options){
    const db = wx.cloud.database()
    const vm = this
    db.collection('todoList').doc(options.id).get({
      success: function (res) {
        // res.data 包含该记录的数据
        console.log('获取数据',res)
        vm.setData({
          detailData:res.data
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log('更新的内容',e, e.detail.value,this, this.data.detailData._id)
    const db = wx.cloud.database()
    const id = this.data.detailData._id
    console.log('id',id)
    db.collection('todoList').doc(id).update({
      data: {
        updateDate: moment().valueOf(),
        ...e.detail.value
      },
      success: function (res) {
        console.log('updateres',res)
        wx.navigateBack()
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  todoListDelete:function(){
    const db = wx.cloud.database()
    const id = this.data.detailData._id
    console.log('delete id',id)
    db.collection('todoList').doc(id).remove({
      success: function (res) {
        console.log(res)
        wx.navigateBack()
      }
    })
  }
})