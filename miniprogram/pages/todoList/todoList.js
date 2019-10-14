const moment = require('../../utils/moment.min.js')
Page({
  data:{
    todoList:[
      {
        title:'减肥', 
        createDate:1571023172000,
        updateDate: 1570936772000,
        content:'减肥到130斤',
        iscomplete:false,
      },
      {
        title: '赚钱',
        createDate: 1571013172000,
        updateDate: 1570023172000,
        content: '先存到十万',
        iscomplete: false,
      },
      {
        title: '买车',
        createDate: 1570936772000,
        updateDate: 1571022172000,
        content: '领克01高能版',
        iscomplete: false,
      }
    ]
  },
  onLoad:function(){
    console.log('todoList', this.data.todoList)
    let list = this.data.todoList
    list.map(item => {
      console.log('item',item)
      if(item.createDate){
        item.createDate = moment(item.createDate).format('YYYY-MM-DD HH:mm')
      }
      if (item.updateDate){
        item.updateDate = moment(item.updateDate).format('YYYY-MM-DD HH:mm')
      }
    })
    this.setData({
      todoList:list
    })
  }
})