# 内置样式

### 介绍

Mone 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div class="mone-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="mone-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略</div>

<!-- 最多显示三行 -->
<div class="mone-multi-ellipsis--l3">这是一段最多显示三行的文字，多余的内容会被省略</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="mone-hairline--top"></div>

<!-- 下边框 -->
<div class="mone-hairline--bottom"></div>

<!-- 左边框 -->
<div class="mone-hairline--left"></div>

<!-- 右边框 -->
<div class="mone-hairline--right"></div>

<!-- 上下边框 -->
<div class="mone-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="mone-hairline--surround"></div>
```

### 动画

可以通过 `transition` 组件使用内置的动画

```html
<!-- 淡入 -->
<transition name="mone-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- 上滑进入 -->
<transition name="mone-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- 下滑进入 -->
<transition name="mone-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- 左滑进入 -->
<transition name="mone-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- 右滑进入 -->
<transition name="mone-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```

### Flex

封装了基础 flex 样式，支持`mone-flex-row`横向布局和`mone-flex-column`纵向布局，每一种布局分别支持 `start` `end` `space-between` `space-around` `center` `strtech` 6种布局组合；另外支持 `mone-flex-per-10` `mone-flex-per-20` `mone-flex-per-30` `mone-flex-per-40` `mone-flex-per-50` `mone-flex-per-33` 6种空间占比。

```html
<!-- 横向布局 -->
<p class="mone-flex-row space-between_center m-b-5 tc-white">
  <span class="blue-block small">80px*80px</span>
  <span class="blue-block mone-flex-per-40">40%*100px</span>
  <span class="blue-block">
    <span style="width: 100%; height: 100%" class="mone-flex-row center_center">
      居中
    </span>
  </span>
</p>

<!-- 纵向布局 -->
<p class="mone-flex-column space-between_center tc-white" style="height: 300px">
  <span class="blue-block small">80px*80px</span>
  <span class="blue-block small">80px*80px</span>
  <span class="blue-block">100px*100px</span>
</p>
```
