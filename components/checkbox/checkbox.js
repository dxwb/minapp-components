Component({
  properties: {
    name: null,
    value: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onChange(){
      const { disabled, value } = this.data

      if (disabled) return

      const newValue = !value
      const parent = this.getRelationNodes('../checkbox-group/checkbox-group')[0]
      
      if(parent){
        this.setParentValue(parent, newValue)
      }else{
        // 没有父级checkboxGroup
        this.triggerEvent('change', newValue)
      }
    },
    setParentValue(parent, value){
      const parentValue = parent.data.value.slice()
      const {name} = this.data

      if(value){
        // 选中
        if(!parentValue.includes(name)){
          parentValue.push(name)
          parent.triggerEvent('change', parentValue)
        }
      }else{
        // 取消选中
        const index = parentValue.indexOf(name)
        if(index !== -1){
          parentValue.splice(index, 1)
          parent.triggerEvent('change', parentValue)
        }
      }
    }
  },
  externalClasses: [
    'custom-class',
    'checked-class',
    'disabled-class'
  ],
  relations: {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor'
    }
  }
})
