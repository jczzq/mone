# Built-in Style

### Intro

Mone contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="mone-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.
</div>

<div class="mone-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.
</div>

<div class="mone-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="mone-hairline--top"></div>

<!-- border bottom -->
<div class="mone-hairline--bottom"></div>

<!-- border left -->
<div class="mone-hairline--left"></div>

<!-- border right -->
<div class="mone-hairline--right"></div>

<!-- border top & bottom -->
<div class="mone-hairline--top-bottom"></div>

<!-- full border -->
<div class="mone-hairline--surround"></div>
```

### Animation

```html
<!-- fade in  -->
<transition name="mone-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide up -->
<transition name="mone-slide-up">
  <div v-show="visible">Slide Up</div>
</transition>

<!-- slide down -->
<transition name="mone-slide-down">
  <div v-show="visible">Slide Down</div>
</transition>

<!-- slide left -->
<transition name="mone-slide-left">
  <div v-show="visible">Slide Left</div>
</transition>

<!-- slide right -->
<transition name="mone-slide-right">
  <div v-show="visible">Slide Right</div>
</transition>
```
