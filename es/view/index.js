import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * 将配置注入到组件的VNode Data对象，从而控制组件
 */
export default {
  name: 'nio-view',
  functional: true,
  inject: {
    ViewGroup: {
      default: null
    }
  },
  render: function render(h, context) {
    var config = context.data.attrs.config || {};
    delete context.data.attrs.config;
    var viewType = config.viewType || context.data.attrs['view-type'];

    if (!viewType) {
      console.error('view require prop `viewType`');
      return;
    }

    var viewKey = config.viewKey,
        _config$attrs = config.attrs,
        attrs = _config$attrs === void 0 ? {} : _config$attrs,
        _config$props = config.props,
        props = _config$props === void 0 ? {} : _config$props,
        style = config.style,
        _config$on = config.on,
        on = _config$on === void 0 ? {} : _config$on,
        _config$nativeOn = config.nativeOn,
        nativeOn = _config$nativeOn === void 0 ? {} : _config$nativeOn,
        _config$domProps = config.domProps,
        domProps = _config$domProps === void 0 ? {} : _config$domProps,
        _config$directives = config.directives,
        directives = _config$directives === void 0 ? [] : _config$directives,
        _config$scopedSlots = config.scopedSlots,
        scopedSlots = _config$scopedSlots === void 0 ? {} : _config$scopedSlots,
        slot = config.slot,
        key = config.key,
        refInFor = config.refInFor,
        _config$trigger = config.trigger,
        trigger = _config$trigger === void 0 ? [] : _config$trigger;
    context.data.class = context.data.class || config.class;
    context.data.style = context.data.style || style;
    context.data.props = _extends({}, context.data.props, {}, props);
    context.data.attrs = _extends({}, context.data.attrs, {}, attrs);
    context.data.on = _extends({}, context.data.on, {}, on);
    context.data.nativeOn = _extends({}, context.data.nativeOn, {}, nativeOn);
    context.data.domProps = _extends({}, context.data.domProps, {}, domProps);
    context.data.directives = directives.concat(context.data.directives || []);
    context.data.scopedSlots = _extends({}, context.data.scopedSlots, {}, scopedSlots);
    context.data.slot = context.data.slot || slot;
    context.data.key = context.data.key || key;
    context.data.refInFor = context.data.refInFor || refInFor; // 事件 & trigger

    trigger.forEach(function (t) {
      var triggerName = t.name || '';
      var exp = t.value;

      var func = function func() {
        if (context.injections.ViewGroup) {
          context.injections.ViewGroup.EXEC(exp, viewKey);
        }
      }; // @ => nativeOn
      // on


      if (triggerName.includes('@')) {
        var tn = triggerName.replace('@', '');
        var nf = context.data.nativeOn[tn];
        context.data.nativeOn[tn] = nf || func;
      } else if (triggerName) {
        var _nf = context.data.on[triggerName];
        context.data.on[triggerName] = _nf || func;
      }
    });
    return h(viewType, context.data, context.children);
  }
};