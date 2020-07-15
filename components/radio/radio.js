Component({
  properties: {
    name: null,
    value: null,
    disabled: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onChange(ev){
      const instance = this.getRelationNodes('../radio-group/radio-group')[0] || this
      instance.triggerEvent('change', ev.detail.value)
    }
  },
  relations: {
    '../radio-group/radio-group': {
      type: 'ancestor'
    }
  },
  externalClasses: [
    'custom-class',
    'checked-class',
    'disabled-class'
  ]
})
