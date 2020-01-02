# View 视图

### 引入

```javascript
import Vue from 'vue';
import { View } from 'mone';

Vue.use(View);
```

## 代码演示

### 基础用法

可以使用`view-type`传入组件名动态渲染一个组件，类似于`component`组件

```html
<nio-view view-type="van-button" type="primary">按钮1</nio-view>
<component :is="'van-button'" type="danger">按钮2</component>
<van-button type="danger">按钮3</van-button>
```

### 聚合 json

`view`组件除了替代`component`以外，还支持传入`config`属性作为一个配置对象，其本质是 [VNode Data](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1) ，在合并过滤后会作为 render 函数的第二个参数渲染出组件。

```html
<nio-view
  :config="{
    viewType: 'van-button',
    attrs: { type: 'primary' },
    on: {
      click() { alert() }
    }
  }"
>{{ $t('button') }}1</nio-view>
<van-button type="danger" @click="alert()">{{ $t('button') }}2</van-button>
...
<script>
export default {
  methods: {
    alert() {
      window.alert('ε=(´ο｀*)))');
    }
  }
};
</script>
```

## API

### Props

| 参数         | 说明                                                                                      | 类型               | 默认值     | 版本  |
| ------------ | ----------------------------------------------------------------------------------------- | ------------------ | ---------- | ----- |
| type         | 类型，可选值为 `primary` `info` `warning` `danger`                                        | _string_           | `default`  | -     |
| size         | 尺寸，可选值为 `large` `small` `mini`                                                     | _string_           | `normal`   | -     |
| text         | 按钮文字                                                                                  | _string_           | -          | -     |
| color        | 按钮颜色，支持传入`linear-gradient`渐变色                                                 | _string_           | -          | 2.1.8 |
| icon         | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/zh-CN/icon)                                | _string_           | -          | -     |
| tag          | HTML 标签                                                                                 | _string_           | `button`   | -     |
| native-type  | 原生 button 标签 type 属性                                                                | _string_           | -          | -     |
| block        | 是否为块级元素                                                                            | _boolean_          | `false`    | -     |
| plain        | 是否为朴素按钮                                                                            | _boolean_          | `false`    | -     |
| square       | 是否为方形按钮                                                                            | _boolean_          | `false`    | -     |
| round        | 是否为圆形按钮                                                                            | _boolean_          | `false`    | -     |
| disabled     | 是否禁用按钮                                                                              | _boolean_          | `false`    | -     |
| hairline     | 是否使用 0.5px 边框                                                                       | _boolean_          | `false`    | -     |
| loading      | 是否显示为加载状态                                                                        | _boolean_          | `false`    | -     |
| loading-text | 加载状态提示文字                                                                          | _string_           | -          | -     |
| loading-type | 加载图标类型，可选值为`spinner`                                                           | _string_           | `circular` | -     |
| loading-size | 加载图标大小                                                                              | _string_           | `20px`     | -     |
| url          | 点击后跳转的链接地址                                                                      | _string_           | -          | -     |
| to           | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -          | -     |
| replace      | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`    | -     |

### Events

| 事件名     | 说明                                     | 回调参数          |
| ---------- | ---------------------------------------- | ----------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event      |
| touchstart | 开始触摸按钮时触发                       | event: TouchEvent |
