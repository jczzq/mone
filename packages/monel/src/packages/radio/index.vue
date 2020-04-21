<script>
export default {
  functional: true,
  name: "nio-radio",
  render(h, context) {
    let { options = [] } = context.data.attrs || {};

    delete context.data.attrs.options;

    options = Array.isArray(options) ? options : [];
    const children = options.map(x => {
      x = typeof x === "string" ? { label: x, value: x } : x;
      return h(
        "el-radio",
        {
          attrs: {
            label: x.value
          }
        },
        x.label
      );
    });
    return h("el-radio-group", context.data, children);
  }
};
</script>
