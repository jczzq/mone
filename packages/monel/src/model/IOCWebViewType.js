/**
 * IOCWebViewType
 */

export default class IOCWebViewType {
  constructor(data = {}) {
    this.label = data.label;
    this.value = data.value;
    // 支持的插槽类型
    this.slotTypes = data.slotTypes || [];
    this.scopedSlotTypes = data.scopedSlotTypes || [];
    this.triggerTypes = data.triggerTypes || [];

    this.icon = data.icon;
    // 函数组件对应的真实组件
    this.realComponent = data.realComponent;
    // 是否是函数组件
    this.functional = !!this.realComponent;
  }
}
