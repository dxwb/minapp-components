// 三列数组
let l1 = null, l2 = null, l3 = null;

Component({
  // 组件的属性列表
  properties: {
    list: {
      type: Array,
      value: [],
      observer(newVal){
        if (newVal.length === 0) return;

        let thisData = this.data;
        l1 = newVal;
        l2 = l1[thisData.l1Index].children;
        l3 = l2[thisData.l2Index].children;

        this.setData({
          range: [l1, l2, l3]
        });
      }
    },
    viewText: {
      type: String,
      value: ''
    }
  },

  // 组件的初始数据
  data: {
    range: [],
    l1Index: 0,
    l2Index: 0,
    l3Index: 0
  },

  // 组件的方法列表
  methods: {
    // 改变值
    changeVal(ev){
      let val = ev.detail.value.map((el, index) => {
        switch(index){
          case 0:
            return {
              value: l1[el].value,
              label: l1[el].label
            };
          case 1:
            return {
              value: l2[el].value,
              label: l2[el].label
            };
          case 2:
            return {
              value: l3[el].value,
              label: l3[el].label
            };
        }
      });

      this.triggerEvent('confirm', {val});
    },
    // 改变列
    changeColumn(ev){
      let detail = ev.detail;
      this._updateColumn(detail.value, detail.column);
    },
    // 更新列数据
    _updateColumn(index, col){
      let thisData = this.data;
      let setData = {
        l2Index: 0,
        l3Index: 0,
        [`l${col + 1}Index`]: index
      };

      switch(col){
        case 0:
          // 需要更新列2、3
          l2 = l1[index].children;
          l3 = l2[0].children;
          setData['range[1]'] = l2;
          setData['range[2]'] = l3;
          break;
        case 1:
          // 需要更新列3
          l3 = l2[index].children;
          setData['range[2]'] = l3;
          break;
      }

      this.setData(setData);
    }
  }
});
