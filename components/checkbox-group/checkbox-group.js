Component({
  properties: {
    value: {
      type: Array,
      value: []
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
    }
  },
  relations: {
    '../checkbox/checkbox': {
      type: 'descendant',
      linked(target){
        target.setData({
          value: this.data.value.includes(target.data.name)
        })
      }
    }
  },
  behaviors: ['wx://form-field']
})
