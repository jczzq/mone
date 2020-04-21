export default {
  name: "nio-button",
  functional: true,
  render(h, context) {
    const { label } = context.data.attrs;

    delete context.data.attrs.label;

    context.children = context.children || [];
    context.children.unshift(label);

    return h("el-button", context.data, context.children);
  }
};
