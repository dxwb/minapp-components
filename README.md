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

