Page({
  data: {
    value1: ['1']
  },
  changeValue1(ev){
    this.setData({
      value1: ev.detail.name
    })
  }
})
