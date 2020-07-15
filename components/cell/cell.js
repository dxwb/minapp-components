Component({
  properties: {
    center: {
      type: Boolean,
      value: true
    },
    clickable: {
      type: Boolean,
      value: false
    },
    href: {
      type: String,
      value: ''
    },
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },
  methods: {
    onClick(){
      if(this.data.href){
        wx[this.data.linkType]({
          url: this.data.href
        })
      }else{
        this.triggerEvent('click')
      }
    }
  },
  externalClasses: [
    'custom-class',
    'icon-class',
    'right-icon-class'
  ],
  options: {
    multipleSlots: true
  }
})
