# View

### Install

``` javascript
import Vue from 'vue';
import { View } from 'mone';

Vue.use(View);
```

## Usage

### Type

```html
<nio-view type="p">Default</nio-view>
```

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` | - |
| size | Can be set to `large` `small` `mini` | *string* | `normal` | - |
| text | Text | *string* | - | - |
| color | Color, support linear-gradient | *string* | - | 2.1.8 |
| icon | Left Icon | *string* | - | - |
| tag | HTML Tag | *string* | `button` | - |
| native-type | Native Type Attribute | *string* | `''` | - |
| plain | Whether to be plain button | *boolean* | `false` | - |
| block | Whether to set display block | *boolean* | `false` | - |
| round | Whether to be round button | *boolean* | `false` | - |
| square | Whether to be square button | *boolean* | `false` | - |
| disabled | Whether to disable button | *boolean* | `false` | - |
| loading | Whether show loading status | *boolean* | `false` | - |
| loading-text | Loading text | *string* | - | - |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` | - |
| loading-size | Loading icon size | *string* | `20px` | - |
| url | Link URL | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
| touchstart | Triggered when touch start | event: TouchEvent |
