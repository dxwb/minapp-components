Component({
  properties: {
    value: {
      type: Array,
      value: []
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    value(val){
      const children = this.getRelationNodes('../checkbox/checkbox')
      children.forEach(el => {
        el.setData({
          value: val.includes(el.data.name)
        })
      })
    },
    disabled(val){
      if (!val) return
      const children = this.getRelationNodes('../checkbox/checkbox')
      children.forEach(el => {
        el.setData({
          disabled: val
        })
      })
    }
  },
  relations: {
    '../checkbox/checkbox': {
      type: 'descendant',
      linked(target){
        const { value, disabled } = this.data
        target.setData({
          value: value.includes(target.data.name),
          disabled
        })
      }
    }
  },
  behaviors: ['wx://form-field']
})
