<template functional>
  <el-menu v-if="menus" v-bind="$attrs" class="nio-menu-panel">
    <nio-menu v-for="(item, index) in menus" :key="index" :child="item" />
  </el-menu>
  <el-submenu v-else-if="child && child[childrenKey]" :index="child.index">
    <span slot="title">
      <i :class="child.icon"></i>
      <span slot="title">{{ child[labelKey] }}</span>
    </span>
    <nio-menu v-for="(item, index) in child[childrenKey]" :key="index" :child="item" />
  </el-submenu>
  <el-menu-item v-else-if="child" :index="child.index" :route="child.route" class="mw-menu-item">
    <i :class="child.icon"></i>
    <span slot="title">{{ child[labelKey] }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "nio-menu",
  props: {
    child: Object,
    menus: Array,
    childrenKey: {
      type: String,
      default: "children"
    },
    labelKey: {
      type: String,
      default: "label"
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/variables.scss";

nio-menu-panel .el-submenu {
  .el-menu-item {
    &::before {
      content: "";
      position: relative;
      height: 6px; /*no*/
      width: 6px; /*no*/
      margin-bottom: 1px; /*no*/
      margin-right: 4px;
      display: inline-block;
      border-radius: 6px; /*no*/
      background-color: $--color-text-primary;
    }
    &.is-active {
      &::before {
        background-color: $--color-primary;
      }
    }
  }
}
</style>
