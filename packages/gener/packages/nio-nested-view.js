/**
 * 将配置注入到组件的data对象，从而控制组件
 */
export default {
  name: "nio-nested-view",
  functional: true,
  render(h, context) {
    const { config = {} } = context.data.attrs || {};

    const children = (config.slots || []).map(config =>
      h("nio-nested-view", {
        attrs: {
          config
        }
      })
    );

    return h("nio-view", context.data, children);
  }
};
