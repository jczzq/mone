<script>
import { FIELD_COMP } from "../index";
export default {
  functional: true,
  name: "nio-field",
  render(h, context) {
    context.data.attrs = context.data.attrs || {};
    let type = context.data.attrs.fieldType || "";
    let compName = FIELD_COMP[type];

    delete context.data.attrs.fieldType;

    // 如果不是内置类型，则以type作为组件名
    if (!compName) {
      compName = type;
    }

    // 解析默认 Props
    let attrs = {};
    if (compName.includes("?")) {
      const defProps = compName.substr(compName.indexOf("?"));
      compName = compName.replace(defProps, "");
      defProps
        .substr(1)
        .split("&")
        .forEach(kv => {
          let [k, v] = kv.split("=");
          try {
            v = JSON.parse(v);
          } catch (error) {}
          attrs[k] = v;
        });
    }

    // 设置默认 Props
    Object.assign(context.data.attrs, attrs);

    return h(compName, context.data, context.children);
  }
};
</script>
