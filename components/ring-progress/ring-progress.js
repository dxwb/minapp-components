Component({
  properties: {
    // 图形宽度
    width: {
      type: Number,
      value: 100
    },
    // 图形高度
    height: {
      type: Number,
      value: 100
    },
    // 进度百分比
    percent: {
      type: Number,
      value: 0
    },
    // 进度条厚度
    thickness: {
      type: Number,
      value: 16
    },
    // 进度条与边缘的间隙
    gap: {
      type: Number,
      value: 4
    },
    color: {
      type: String,
      value: '#000'
    }
  },
  data: {
    innerThickness: 20,
    ctx: null,
    canvas: null,
    w: 50,
    h: 50,
    innerColor: null
  },
  lifetimes: {
    async attached(){
      await this.getContext()
      this.start()
    }
  },
  methods: {
    start(){
      this.createColor()
      // canvas.requestAnimationFrame(this.start.bind(this))
      this.draw()
    },
    draw(){
      const {ctx, w, h, thickness, percent, gap, innerColor} = this.data

      if(!ctx) {
        // 此时可能ctx还未获取，重试调用
        return setTimeout(() => {
          this.draw()
        }, 100)
      }

      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.strokeStyle = innerColor
      ctx.lineWidth = thickness
      ctx.lineCap = 'round'
      ctx.translate(w / 2, h / 2)
      ctx.rotate(-90 * Math.PI / 180)
      ctx.beginPath()
      ctx.arc(0, 0, w / 2 - thickness / 2 - gap, 0, Math.PI * 2 * percent)
      ctx.stroke()
      ctx.restore()
    },
    // 根据color生成渐变色
    createColor(){
      const {color, ctx, w} = this.data
      const colors = color.split(';')

      if(colors.length === 1) {
        this.data.innerColor = colors[0]
        return
      }
      
      const circularGradient = ctx.createRadialGradient(w / 2, 0, 0, w / 2, 0, w)
      colors.forEach((el, index) => {
        circularGradient.addColorStop(index / (colors.length - 1), el)
      })
      
      this.data.innerColor = circularGradient
    },
    getContext(){
      return new Promise(resolve => {
        const query = this.createSelectorQuery()
        setTimeout(() => {
          query.select('#ring')
            .fields({node: true, size: true})
            .exec(([res]) => {
              const canvas = res.node
              const ctx = canvas.getContext('2d')
              const dpr = wx.getSystemInfoSync().pixelRatio

              canvas.width = res.width * dpr
              canvas.height = res.height * dpr

              this.data.w = res.width
              this.data.h = res.height
              this.data.canvas = canvas
              this.data.ctx = ctx

              ctx.scale(dpr, dpr)
              resolve()
            })
        }, 100)
      })
    }
  },
  observers: {
    percent(){
      this.draw()
    },
    thickness(val){
      this.setData({
        innerThickness: val + this.data.gap * 2
      })
    }
  },
  externalClasses: [
    'custom-class',
    'inner-class'
  ]
})
