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
      const { href, linkType } = this.data

      this.triggerEvent('click')
      if(href){
        wx[linkType]({
          url: href
        })
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
