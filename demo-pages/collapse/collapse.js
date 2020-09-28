Page({
  data: {
    value1: ['1'],
    value2: '1'
  },
  changeValue1(ev){
    this.setData({
      value1: ev.detail.name
    })
  },
  changeValue2(ev){
    this.setData({
      value2: ev.detail.name
    })
  }
})
