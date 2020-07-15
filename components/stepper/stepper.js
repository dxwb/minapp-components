Component({
  properties: {
    value: null,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: Number.MAX_SAFE_INTEGER
    },
    disabled: {
      type: Boolean,
      value: false
    },
    inputDisabled: {
      type: Boolean,
      value: false
    }
  },
  lifetimes: {
    attached(){
      const {value, min, max, disabled} = this.data
      this.setData({
        value: this.range(value),
        minusDisabled: disabled || value <= min,
        plusDisabled: disabled || value >= max
      })
    }
  },
  data: {
    minusDisabled: false,
    plusDisabled: false
  },
  methods: {
    onBlur(ev){
      const val = this.range(ev.detail.value)
      this.setInputVal(Number.isNaN(val) ? this.data.min : val)
    },
    onMinus(){
      if(this.data.minusDisabled)return
      this.changeVal('minus')
    },
    onPlus(){
      if(this.data.plusDisabled)return
      this.changeVal('plus')
    },
    changeVal(type){
      const diff = type === 'minus' ? -1 : 1
      const value = this.data.value + diff
      this.setInputVal(value)
      this.triggerEvent(type)
    },
    setInputVal(value){
      (typeof value !== 'number') && (value = Number(value))

      const data = {
        value
      }
      // 判断加减按钮禁用
      const plusDisabled = value >= this.data.max
      const minusDisabled = value <= this.data.min
      // 防止setData重复设置数据
      if(this.data.plusDisabled !== plusDisabled){
        data.plusDisabled = plusDisabled
      }
      if(this.data.minusDisabled !== minusDisabled){
        data.minusDisabled = minusDisabled
      }
      this.setData(data)
      this.triggerEvent('change', value)
    },
    // 计算在max和min范围内val的最值
    range(val){
      const {max, min} = this.data
      return Math.max(Math.min(max, val), min)
    }
  }
})
