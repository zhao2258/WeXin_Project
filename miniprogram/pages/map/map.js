Page({
  data: {
    latitude: 31.87619,
    longitude: 117.449997,
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
    console.log('进入地图页面！')
    const vm = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(this,res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        vm.setData({
          latitude: res.latitude,
          longitude: res.longitude,
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