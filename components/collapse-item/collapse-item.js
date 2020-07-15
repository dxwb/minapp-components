const nextTick = () => new Promise(resolve => setTimeout(resolve, 20))

Component({
  relations: {
    '../collapse/collapse': {
      type: 'ancestor',
      linked(parent) {
        this.parent = parent
      }
    }
  },
  properties: {
    name: null
  },
  data: {
    contentHeight: 0,
    expanded: false,
    transition: false
  },
  ready(){
    this.updateExpanded()
      .then(nextTick)
      .then(() => {
        const data = { transition: true }
        if (this.data.expanded) {
          data.contentHeight = 'auto'
        }
        this.setData(data)
      })
  },
  methods: {
    updateExpanded(){
      if (!this.parent) {
        return Promise.resolve()
      }

      const { value, accordion } = this.parent.data
      const { name } = this.data
      const currentName = name === null ? index : name
      const expanded = accordion
        ? value === currentName
        : (value || []).some(name => name === currentName)
      const stack = []

      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded));
      }
      stack.push(new Promise(resolve => {
        this.setData({
          expanded
        }, resolve)
      }))
      return Promise.all(stack)
    },
    updateStyle(expanded){
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)
          .select('.collapse-item__content')
          .boundingClientRect(rect => {
            if (Array.isArray(rect) && rect.length) {
              resolve(rect)
            }
            if (rect) {
              resolve(rect)
            }
          }).exec()
      })
        .then(rect => rect.height)
        .then(height => {
          if (expanded) {
            return new Promise(resolve => {
              this.setData({
                contentHeight: height ? `${height}px` : 'auto'
              }, resolve)
            })
          }
          return new Promise(resolve => {
            this.setData({
              contentHeight: `${height}px`
            }, resolve)
          })
            .then(nextTick)
            .then(() => {
              return new Promise(resolve => {
                this.setData({
                  contentHeight: 0
                }, resolve)
              })
            })
        })
    },
    onClick(){
      const { name, expanded } = this.data
      const index = this.parent.children.indexOf(this)
      const currentName = name == null ? index : name

      this.parent.switch(currentName, !expanded, this)
    },
    onTransitionEnd(){
      if (this.data.expanded) {
        this.setData({
          contentHeight: 'auto'
        })
      }
      this.triggerEvent('transitionend', this)
    }
  },
  options: {
    multipleSlots: true // 启用多slot支持
  },
  externalClasses: [
    'custom-class',
    'custom-class-open',
    'title-class',
    'content-class'
  ]
})
