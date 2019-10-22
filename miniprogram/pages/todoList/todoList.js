const moment = require('../../utils/moment.min.js')
Page({
  data:{
    todoList:[]
  },
  onShow:function(){
    const db = wx.cloud.database()
    const vm = this
    db.collection('todoList').get({
      success(res){
        let list = res.data
        list.map(item => {
          if(item.createDate){
            item.createDate = moment(item.createDate).format('YYYY-MM-DD HH:mm')
          }
          if (item.updateDate){
            item.updateDate = moment(item.updateDate).format('YYYY-MM-DD HH:mm')
          }
        })
        vm.setData({
          todoList: list.reverse()
        })
      }
    })
  },
  goDetail:function(res){
    let item = res.currentTarget.dataset.item
    wx.navigateTo({
      url: '../todoListDetail/todoListDetail?id=' + item._id
    })
  },
  addRecord:function(res){
    wx.navigateTo({
      url: '../todoListAdd/todoListAdd'
    })
  }
})