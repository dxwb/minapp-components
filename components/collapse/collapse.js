Component({
  relations: {
    '../collapse-item/collapse-item': {
      type: 'descendant',
      linked(child) {
        this.children.push(child)
      },
      unlinked(child) {
        this.children = this.children.filter(item => item !== child)
      }
    }
  },
  properties: {
    value: {
      type: null,
      observer(){
        this.children.forEach(child => {
          child.updateExpanded()
        })
      }
    },
    accordion: {
      type: Boolean,
      observer() {
        this.children.forEach(child => {
          child.updateExpanded()
        })
      }
    }
  },
  created(){
    this.children = []
  },
  methods: {
    switch(name, expanded, child){
      const { accordion, value } = this.data
      if (!accordion) {
        name = expanded
          ? (value || []).concat(name)
          : (value || []).filter(activeName => activeName !== name)
      } else {
        name = expanded ? name : ''
      }
      this.triggerEvent('change', {
        name,
        activeChild: child
      })
    }
  },
  externalClasses: ['custom-class']
})
