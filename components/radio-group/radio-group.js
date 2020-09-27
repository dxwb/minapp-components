Component({
  relations: {
    '../radio/radio': {
      type: 'descendant',
      linked(target){
        const { value, disabled } = this.data
        target.setData({
          value,
          disabled
        })
      }
    }
  },
  properties: {
    value: null,
    disabled: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    value(value){
      const children = this.getRelationNodes('../radio/radio')
      children.forEach(el => {
        el.setData({
          value
        })
      })
    },
    disabled(val){
      if (!val) return
      const children = this.getRelationNodes('../radio/radio')
      children.forEach(el => {
        el.setData({
          disabled: val
        })
      })
    }
  },
  behaviors: ['wx://form-field']
})
