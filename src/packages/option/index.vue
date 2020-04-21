<script>
export default {
  functional: true,
  name: "nio-option",
  render(h, context) {
    let { optionAll, options = [] } = context.data.attrs || {};

    delete context.data.attrs.optionAll;
    delete context.data.attrs.options;

    options = Array.isArray(options) ? options : [];
    const children = options.map(x => {
      const item = typeof x === "string" ? { label: x, value: x } : x;
      return h("el-option", {
        attrs: {
          ...item
        }
      });
    });
    if (optionAll) {
      const attrs = typeof optionAll === "object" ? optionAll : { label: "全部", value: null };
      children.unshift(
        h("el-option", {
          attrs
        })
      );
    }
    return h("el-select", context.data, children);
  }
};
</script>
