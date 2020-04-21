<script>
export default {
  functional: true,
  name: "nio-form",
  render(h, context) {
    context.data.attrs = context.data.attrs || {};

    const { fields = [], model = {} } = context.data.attrs || {};

    delete context.data.attrs.fields;

    let formItems = fields
      .filter(x => x.fieldKey && x.hide !== true)
      .map(x => {
        const { fieldKey, caption, fieldType } = x;
        const items = Array.isArray(x.items) ? x.items : [];
        return h(
          "el-form-item",
          {
            key: fieldKey,
            attrs: {
              prop: fieldKey,
              label: caption
            }
          },
          [
            h("nio-field", {
              attrs: {
                fieldType,
                ...x.attrs,
                value: model[fieldKey]
              },
              on: {
                input(value) {
                  model[fieldKey] = value;
                },
                ...x.on
              }
            }),
            ...items
          ]
        );
      });
    if (context.children) {
      formItems.push(h("el-form-item", context.children));
    }
    return h("el-form", context.data, formItems);
  }
};
</script>
