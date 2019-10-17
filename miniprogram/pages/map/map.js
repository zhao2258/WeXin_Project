let moment = require('../../utils/moment.min.js')
Page({
  data: {
    latitude: 31.87619,
    longitude: 117.449997,
    havaUser:false,
    // markers: [{
    //   iconPath: "/resources/others.png",
    //   id: 0,
    //   latitude: 31.187822,
    //   longitude: 121.436363,
    //   width: 50,
    //   height: 50
    // }]
  },
  onLoad:function(){
    const vm = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        vm.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        let nickName = wx.getStorageSync('nickName')
        const db = wx.cloud.database()
        db.collection('user').doc(nickName).get()
        .then(res => {
          // res.data 包含该记录的数据
          console.log('查询到的数据',res)
          let position = res.data.position
          position.push({
            date: moment().format('YYYY/MM/DD HH:mm:ss'),
            latitude: vm.data.latitude,
            longitude: vm.data.longitude,})
          db.collection('user').doc(nickName).update({
            data: {
              position
            },
            success: function (res) {
              console.log('更新的res', res)
            }
          })
        })
        .catch(res =>{
          db.collection('user').add({
            data: {
              position:[{
                latitude: vm.data.latitude,
                longitude: vm.data.longitude,
                date: moment().format('YYYY/MM/DD HH:mm:ss')
              }],
              nickName: nickName,
              _id: nickName
            },
            success: function (res) {
              console.log('新增的res', res)
            }
          })
        })
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})