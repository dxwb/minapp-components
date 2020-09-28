# minapp-components
微信小程序组件

## Cell 单元格

### Props

| 参数      | 类型                                                   | 说明                                                         |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| center    | Boolean = <span style="color:#999;">true</span>        | 是否使内容垂直居中                                           |
| clickable | Boolean = <span style="color:#999;">false</span>       | 是否显示点击反馈                                             |
| href      | String = <span style="color:#999;">''</span>           | 点击后跳转的页面地址                                         |
| link-type | String = <span style="color:#999;">'navigateTo'</span> | 链接跳转类型，<br />可选值为：`switchTab`, `reLaunch`, `redirectTo`，<br />对应小程序[文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html "小程序官方文档") |

### Event

| 事件名     | 说明             | 参数 |
| ---------- | ---------------- | ---- |
| bind:click | 点击单元格时触发 | -    |

### Slot

| 名称       | 说明                   |
| ---------- | ---------------------- |
| -          | 右对齐的`flex: 1;`的容器 |
| label      | 左对齐的`flex: 1;`的容器 |
| icon       | 左边icon位             |
| right-icon | 右边icon位             |

### 外部样式类

| 类名             | 说明         |
| ---------------- | ------------ |
| custom-class     | 根节点样式类 |
| icon-class       | 左icon样式类 |
| right-icon-class | 右icon样式类 |

## Checkbox 复选框

### CheckboxGroup Props

|参数|类型|说明|
|-|-|-|
|value| Array = <span style="color:#999;">[]</span>|所有选中项的 name|
|disabled| Boolean = <span style="color:#999;">false</span>|禁用所有选项|

### CheckboxGroup Event

|事件名|说明|参数|
|-|-|-|
|bind:change|当绑定值变化时触发的事件|当前组件的值|


### Checkbox Props

|参数|类型|说明|
|-|-|-|
|name| Array = <span style="color:#999;">[]</span>|标识 Checkbox 名称|
|value| Boolean = <span style="color:#999;">false</span>|是否为选中状态|
|disabled| Boolean = <span style="color:#999;">false</span>|是否禁用|

### Checkbox Event

|事件名|说明|参数|
|-|-|-|
|bind:change|当绑定值变化时触发的事件|当前组件的值|

### Checkbox Slot

|名称|说明|
|-|-|
|-|任意wxml元素|

### Checkbox 外部样式类

|类名|说明|
|-|-|
|custom-class|根节点样式类|
|checked-class|选中时拥有的类名|
|disabled-class|禁用时拥有的类名|

## Radio 单选框

### RadioGroup Props

|参数|类型|说明|
|-|-|-|
|value|any|选中项的 name|
|disabled| Boolean = <span style="color:#999;">false</span>|禁用所有选项|

### RadioGroup Event

|事件名|说明|参数|
|-|-|-|
|bind:change|当绑定值变化时触发的事件|当前组件的值|

### Radio Props

|参数|类型|说明|
|-|-|-|
|name| any |标识 Radio 名称|
|disabled| Boolean = <span style="color:#999;">false</span>|是否禁用|

### Radio Event

|事件名|说明|参数|
|-|-|-|
|bind:change|当绑定值变化时触发的事件|当前组件的值|

### Radio Slot

|名称|说明|
|-|-|
|-|任意wxml元素|

### Radio 外部样式类

|类名|说明|
|-|-|
|custom-class|根节点样式类|
|checked-class|选中时拥有的类名|
|disabled-class|禁用时拥有的类名|

## Collapse 折叠面板

### Collapse Props

|参数|类型|说明|
|-|-|-|
|value| any |展开项的name，当`accordion`不为true时，此参数的类型应为数组|
|accordion| Boolean = false |是否开启手风琴模式|

### Collapse Event

|事件名|说明|参数|
|-|-|-|
|bind:change|当绑定值变化时触发的事件|当前组件的值|

### Collapse Slot

|名称|说明|
|-|-|
|-|任意wxml元素|

### CollapseItem Props

|参数|类型|说明|
|-|-|-|
|name| any |标识 CollapseItem 名称|

### CollapseItem Event

|事件名|说明|参数|
|-|-|-|
|bind:transitionend|展开或收起动画完成时触发|当前组件实例|

### CollapseItem Slot

|名称|说明|
|-|-|
|title|用于触发折叠切换事件的元素|
|content|被折叠的元素|

### CollapseItem 外部样式类

|类名|说明|
|-|-|
|custom-class|根节点样式类|
|custom-class-open|展开时的根节点样式类|
|title-class|title slot的样式类|
|content-class|content slot的样式类|

## Modal 弹窗

### Modal Props

|参数|类型|说明|
|-|-|-|
|show| Boolean = false |是否显示|
|position| ''\|'top'\|'left'\|'bottom'\|'right' |弹窗内容的位置|
|useAnimation| Boolean = false |是否使用动画，为false时禁用动画|

### Modal Event

|事件名|说明|参数|
|-|-|-|
|bind:close|点击遮罩时触发|-|

### Modal Slot

|名称|说明|
|-|-|
|-|弹窗内容|

### Modal 外部样式类

|类名|说明|
|-|-|
|custom-class|根节点样式类|
|mask-class|遮罩样式类|
|main-class|弹窗内容区域样式类（即content slot的父节点）|

## RingProgress 环形进度条

### RingProgress Props

|参数|类型|说明|
|-|-|-|
|width| Number = 100 |图形宽度|
|height| Number = 100 |图形高度|
|percent| Number = 0 |进度百分比|
|thickness| Number = 16 |进度条厚度|
|gap| Number = 4 |进度条与边缘的间隙|
|color| String = '#000' |进度条颜色，支持渐变色，使用渐变色时，多个颜色由分号 ; 分隔，如：'#000;#fff;#abc'|

### RingProgress Slot

|名称|说明|
|-|-|
|-|图形中间的位置|

### RingProgress 外部样式类

|类名|说明|
|-|-|
|custom-class|根节点样式类|
|inner-class|图形中间的位置样式类（即default slot的父节点）|

## Stepper 步进器

### Stepper Props

|参数|类型|说明|
|-|-|-|
|value| Number |步进器值|
|min| Number = 1 |最小值|
|max| Number = `Number.MAX_SAFE_INTEGER` |最大值|
|disabled| Boolean = false |是否禁用|
|inputDisabled| Boolean = false |是否禁用输入框|

### Stepper Event

|事件名|说明|参数|
|-|-|-|
|bind:minus|点击减号后触发|减少后的值|
|bind:plus|点击加号后触发|增加后的值|
|bind:change|改变值后触发|改变后的值|
