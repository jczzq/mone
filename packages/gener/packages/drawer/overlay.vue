<template>
  <transition name="nio-overlay-fade">
    <div class="nio-overlay" v-if="show" @click="handleClick" @touchmove="prevent" :style="overlayStyle"></div>
  </transition>
</template>

<script>
/**
 * 遮罩组件
 */
export default {
  name: "nio-overlay",
  props: {
    // 是否显示
    show: {
      type: Boolean,
      default: false
    },
    // 是否fixed定位
    fixed: {
      type: Boolean,
      default: false
    },
    // 点击事件
    onClick: {
      type: Function
    },
    // 透明度
    opacity: {
      type: Number,
      default: 0.4
    },
    // 遮罩颜色
    color: {
      type: String,
      default: "#000"
    },
    // 遮罩层级
    zIndex: {
      type: Number
    }
  },
  computed: {
    overlayStyle() {
      return {
        opacity: this.opacity,
        "background-color": this.color,
        position: this.fixed ? "fixed" : "",
        "z-index": this.zIndex
      };
    }
  },
  methods: {
    prevent(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleClick() {
      if (this.onClick && this.show) {
        this.onClick();
      }
    }
  }
};
</script>

<style lang="scss">
.nio-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.4;
  z-index: 1000;
}

.nio-overlay-fade-enter-active,
.nio-overlay-fade-leave-active {
  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}

.nio-overlay-fade-enter,
.nio-overlay-fade-leave-active {
  opacity: 0 !important;
}
</style>
