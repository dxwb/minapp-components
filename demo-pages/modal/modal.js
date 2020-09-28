Page({
  data: {
    modal1: false,
    modal2: false,
    modal3: false
  },
  showModal1(){
    this.setData({
      modal1: true
    })
  },
  hideModal1(){
    this.setData({
      modal1: false
    })
  },
  showModal2(){
    this.setData({
      modal2: true
    })
  },
  hideModal2(){
    this.setData({
      modal2: false
    })
  },
  showModal3(){
    this.setData({
      modal3: true
    })
  },
  hideModal3(){
    this.setData({
      modal3: false
    })
  }
})
