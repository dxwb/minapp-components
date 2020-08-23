Page({
  data: {
    value1: ['1'],
    value2: ['2'],
    value3: ['1'],
    value3List: [
      {
        id: '1',
        label: '蓝色'
      },
      {
        id: '2',
        label: '红色'
      },
      {
        id: '3',
        label: '绿色'
      },
      {
        id: '4',
        label: '黑色'
      },
      {
        id: '5',
        label: '白色'
      },
      {
        id: '6',
        label: '五颜六色'
      }
    ]
  },
  changeValue1 (ev) {
    this.setData({
      value1: ev.detail
    })
  },
  changeValue2 (ev) {
    this.setData({
      value2: ev.detail
    })
  },
  changeValue3 (ev) {
    this.setData({
      value3: ev.detail
    })
  }
})