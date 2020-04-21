<template>
  <el-row class="nio-view-group" :class="model.class" :style="model.style">
    <el-col v-for="(view, index) in views" :key="view.viewKey || index" v-bind="view.layout">
      <nio-nested-view :ref="view.viewKey" :config="view" :class="view.class" :style="view.style"> </nio-nested-view>
    </el-col>
  </el-row>
</template>

<script>
import { setPropsData } from "../index";

export default {
  name: "nio-view-group",
  provide() {
    return {
      ViewGroup: this
    };
  },
  props: {
    model: { type: Object, required: true }
  },
  data() {
    return {
      views: this.model.views.sort((a, b) => a.sort - b.sort),
      viewKeys: this.model.viewKeys,
      viewMap: this.model.viewMap
    };
  },
  created() {
    this.EXEC(this.model.createdTrigger);
  },
  mounted() {
    this.EXEC(this.model.mountedTrigger);
  },
  methods: {
    // data赋值到各组件具体属性
    assignViewData(viewKeys = this.viewKeys) {
      if (typeof viewKeys === "string") {
        viewKeys = [viewKeys];
      }
      viewKeys.forEach(k => {
        const x = this.viewMap[k];
        setPropsData(x);
      });
    },
    // 解析表达式
    EXEC(exp /* originViewKey */) {
      if (!exp) return;
      try {
        const SELF = this; // eslint-disable-line
        // 3. 处理函数
        exp = exp.replace(/@/g, "SELF.");
        exp = `(async () => { ${exp} })()`;
        // console.log(exp);
        eval(exp);
      } catch (error) {
        console.error(error);
      }
    },
    GET_VIEW_DATA(viewKeys = []) {
      if (typeof viewKeys === "string") {
        return (this.viewMap[viewKeys] || {}).data;
      } else if (Array.isArray(viewKeys)) {
        return viewKeys.map(viewKey => (this.viewMap[viewKey] || {}).data);
      }
      return null;
    },
    // Ajax Request
    async REQUEST(paramData, { before, after, method = "POST" } = {}) {
      // this.SET_VIEW_LOADING(reqViewKeys);
      try {
        before && before();

        const { request } = this.$mone;

        const res = await request(void 0, paramData, method);
        return res;
      } catch (error) {
        return Promise.reject(error);
      } finally {
        after && after();
        // this.SET_VIEW_LOADING(reqViewKeys, false);
      }
    },
    SET_VIEW_LOADING(viewKeys, flag = true, all = true) {
      if (!viewKeys) viewKeys = all ? this.viewKeys : [];
      if (typeof viewKeys === "string") {
        viewKeys = [viewKeys];
      }
      viewKeys.forEach(k => {
        const v = this.viewMap[k];
        if (v) {
          v.pending = flag;
        }
      });
    },
    SET_VIEW_DATA(data, viewKeys = []) {
      if (typeof viewKeys === "string") {
        viewKeys = [viewKeys];
      }
      viewKeys.forEach(viewKey => {
        const view = this.viewMap[viewKey];
        if (view) {
          view.data = data;
        }
      });
      this.assignViewData(viewKeys);
    },
    SET_RESULT_DATA(res = {}, setmap = [], { dataKey = "data" } = {}) {
      const data = res[dataKey] || {};
      setmap.forEach(({ datamarketId, viewKey }) => {
        const { body } = data.find(x => x.datamarketId === datamarketId) || {};

        this.SET_VIEW_DATA(body, viewKey);
      });
    },
    // 手动执行某些视图的某个表达式
    TRIGGER(viewKeys = [], event = "click") {
      if (typeof viewKeys === "string") viewKeys = [viewKeys];
      viewKeys.forEach(vk => {
        const trigger = (this.viewMap[vk] || {}).trigger || [];
        const e = trigger.find(x => x.name === event);
        e && this.EXEC(e.value);
      });
    },
    // 调用自定义的方法
    CALLBACK(func) {
      if (typeof func !== "string") return false;
      return (
        this.$parent[func] ||
        (() => {
          console.info(`Function '${func}' not found`);
        })
      );
    }
  }
};
</script>

<style lang="scss">
.nio-view-group {
  box-sizing: border-box;
}
</style>
