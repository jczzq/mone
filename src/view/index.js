/**
 * 将配置注入到组件的VNode Data对象，从而控制组件
 */
export default {
  name: 'nio-view',
  functional: true,
  inject: {
    ViewGroup: { default: null }
  },
  render(h, context) {
    const config = context.data.attrs.config || {};
    delete context.data.attrs.config;
    const viewType = config.viewType || context.data.attrs['view-type'];
    if (!viewType) {
      console.error('view require prop `viewType`');
      return;
    }
    const {
      // IOCWeb 属性
      viewKey,
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

    context.data.class = context.data.class || config.class;
    context.data.style = context.data.style || style;
    context.data.props = { ...context.data.props, ...props };
    context.data.attrs = { ...context.data.attrs, ...attrs };
    context.data.on = { ...context.data.on, ...on };
    context.data.nativeOn = { ...context.data.nativeOn, ...nativeOn };
    context.data.domProps = { ...context.data.domProps, ...domProps };
    context.data.directives = directives.concat(context.data.directives || []);
    context.data.scopedSlots = {
      ...context.data.scopedSlots,
      ...scopedSlots
    };
    context.data.slot = context.data.slot || slot;
    context.data.key = context.data.key || key;
    context.data.refInFor = context.data.refInFor || refInFor;

    // 事件 & trigger
    trigger.forEach(t => {
      const triggerName = t.name || '';
      const exp = t.value;
      const func = () => {
        if (context.injections.ViewGroup) {
          context.injections.ViewGroup.EXEC(exp, viewKey);
        }
      };
      // @ => nativeOn
      // on
      if (triggerName.includes('@')) {
        const tn = triggerName.replace('@', '');
        const nf = context.data.nativeOn[tn];
        context.data.nativeOn[tn] = nf || func;
      } else if (triggerName) {
        const nf = context.data.on[triggerName];
        context.data.on[triggerName] = nf || func;
      }
    });

    return h(viewType, context.data, context.children);
  }
};
