Page({
  data: {
    value1: '1',
    value2: '1',
    value2List: [
      {
        id: '1',
        label: '男'
      },
      {
        id: '2',
        label: '女'
      }
    ],
    value3: '1'
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
  }
})
