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
| -          | 右对齐的flex: 1;的容器 |
| label      | 左对齐的flex: 1;的容器 |
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
