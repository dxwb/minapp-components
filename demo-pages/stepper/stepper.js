Page({
  data: {
    value1: 1,
    value2: 1,
    value3: 5,
    value4: 1
  },
  changeValue1(ev){
    this.setData({
      value1: ev.detail
    })
  },
  changeValue2(ev){
    this.setData({
      value2: ev.detail
    })
  },
  changeValue3(ev){
    this.setData({
      value3: ev.detail
    })
  },
  changeValue4(ev){
    this.setData({
      value4: ev.detail
    })
  }
})
