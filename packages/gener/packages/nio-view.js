/**
 * 将配置注入到组件的data对象，从而控制组件
 */
export default {
  name: "nio-view",
  functional: true,
  inject: {
    ViewGroup: { default: null }
  },
  render(h, context) {
    const config = context.data.attrs.config || {};
    delete context.data.attrs.config;
    if (!config.viewType) {
      return;
    }
    let {
      // IOCWeb 属性
      viewKey,
      viewType,
      attrs = {},
      props = {},
      // VNode 属性
      style,
      on = {},
      nativeOn = {},
      domProps = {},
      directives = [],
      scopedSlots = {},
      slot,
      key,
      refInFor,
      trigger = []
    } = config;
    if (!viewType) return;

    context.data.class = context.data.class || config.class;
    context.data.style = context.data.style || style;
    context.data.props = Object.assign({}, context.data.props, props);
    context.data.attrs = Object.assign({}, context.data.attrs, attrs);
    context.data.on = Object.assign({}, context.data.on, on);
    context.data.nativeOn = Object.assign({}, context.data.nativeOn, nativeOn);
    context.data.domProps = Object.assign({}, context.data.domProps, domProps);
    context.data.directives = context.data.directives || [];
    context.data.directives = directives.concat(context.data.directives);
    context.data.scopedSlots = Object.assign({}, context.data.scopedSlots, scopedSlots);
    context.data.slot = context.data.slot || slot;
    context.data.key = context.data.key || key;
    context.data.refInFor = context.data.refInFor || refInFor;

    // 事件 & trigger
    trigger.forEach(t => {
      let triggerName = t.name || "";
      let exp = t.value;
      const func = () => {
        if (context.injections.ViewGroup) {
          context.injections.ViewGroup.EXEC(exp, viewKey);
        }
      };
      // @ => nativeOn
      // on
      if (triggerName.includes("@")) {
        const _triggerName = triggerName.replace("@", "");
        const nf = context.data.nativeOn[_triggerName];
        context.data.nativeOn[_triggerName] = nf || func;
      } else if (triggerName) {
        const nf = context.data.on[triggerName];
        context.data.on[triggerName] = nf || func;
      }
    });

    return h(viewType, context.data, context.children);
  }
};
