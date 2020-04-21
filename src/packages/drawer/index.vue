<template>
  <transition name="drawer-fade" mode="out-in" @after-enter="afterEnter" @after-leave="afterLeave">
    <div v-show="visible" class="nio-drawer m-paper" :class="{ right: right }" :style="drawerStyle">
      <div class="nio-drawer-box">
        <span v-if="showClose" class="btn-close" @click.stop="$emit('update:visible', false)">
          <i class="el-icon-arrow-right"></i>
        </span>
        <div class="nio-drawer-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * 抽屉组件
 */
import Vue from "vue";
import mOverlay from "./overlay";
const OverlayConstructor = Vue.extend(mOverlay);
// const transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
const getZIndex = () => {
  if (!Vue.prototype.$ELEMENT) {
    Vue.prototype.$ELEMENT = { zIndex: 1000 };
  }
  return Vue.prototype.$ELEMENT.zIndex++;
};
export default {
  name: "nio-drawer",
  props: {
    // 是否固定在右边
    showClose: {
      type: Boolean,
      default: false
    },
    // 是否固定在右边
    right: {
      type: Boolean,
      default: true
    },
    // 是否显示抽屉
    visible: {
      type: Boolean,
      default: false
    },
    // 宽度支持auto 和 %百分比
    width: {
      type: [Number, String],
      default: "60%"
    },
    minWidth: {
      type: String,
      default: "50%"
    },
    // 是否显示遮罩
    overlay: {
      type: Boolean,
      default: false
    },
    // 遮罩颜色
    overlayColor: {
      type: String
    },
    // 遮罩透明度
    overlayOpacity: {
      type: Number
    },
    // 遮罩点击事件
    overlayClick: {
      type: Function
    },
    // 是否插入至 body 元素上
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let publicZIndex = getZIndex();
    return {
      overlayZIndex: publicZIndex,
      zIndex: publicZIndex + 1,
      overlayInstance: null
    };
  },
  computed: {
    drawerStyle() {
      return {
        width: this.getWidth(this.width),
        "z-index": this.zIndex,
        "min-width": this.minWidth
      };
    }
  },
  methods: {
    getWidth(w) {
      let width = String(w);
      if (width && width.indexOf("%") === -1 && width.indexOf("px") === -1) {
        width += "px";
      }
      return width;
    },
    openOverlay() {
      if (this.overlayInstance || !this.overlay) return;
      let overlay = (this.overlayInstance = new OverlayConstructor({
        el: document.createElement("div")
      }));
      overlay.fixed = true;
      overlay.color = this.overlayColor;
      overlay.opacity = this.overlayOpacity;
      overlay.zIndex = this.overlayZIndex;
      overlay.onClick = this.overlayClick;
      document.body.appendChild(overlay.$el);
      // this.preventScrolling();
      this.$nextTick(() => {
        overlay.show = true;
      });
    },
    closeOverlay() {
      if (!this.overlayInstance) return;
      // this.allowScrolling();
      let overlay = this.overlayInstance;
      overlay.show = false;
      this.overlayInstance = null;
      setTimeout(() => {
        overlay.$el.parentNode.removeChild(overlay.$el);
        overlay.$destroy();
      }, 450);
    },
    // 禁止滚动
    preventScrolling() {
      if (this.locked) return;
      // body 操作
      const body = document.getElementsByTagName("body")[0];
      const html = document.getElementsByTagName("html")[0];
      this.bodyOverflow = body.style.overflow;
      this.htmlOverflow = html.style.overflow;
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      this.locked = true;
    },
    // 还原滚动设置
    allowScrolling() {
      const body = document.getElementsByTagName("body")[0];
      const html = document.getElementsByTagName("html")[0];
      body.style.overflow = this.bodyOverflow || "";
      html.style.overflow = this.htmlOverflow || "";
      this.bodyOverflow = null;
      this.htmlOverflow = null;
      this.locked = false;
    },
    afterEnter() {
      this.$emit("after-enter");
    },
    afterLeave() {
      this.$emit("after-leave");
    },
    show(func) {
      return new Promise(resolve => {
        this.$emit("update:visible", true);
        this.$once("after-enter", () => {
          if (func) func();
          resolve();
        });
      });
    },
    hide(func) {
      return new Promise(resolve => {
        this.$emit("update:visible", false);
        this.$once("after-leave", () => {
          if (func) func();
          resolve();
        });
      });
    }
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.overlay) {
          this.openOverlay();
        }
        this.$emit("show");
      } else {
        this.$emit("hide");
        if (this.overlay) this.closeOverlay();
      }
    }
  },
  mounted() {
    if (this.visible && this.overlay) this.openOverlay();
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  beforeDestroy() {
    this.closeOverlay();
  }
};
</script>

<style lang="scss">
$--easeOutFunction: cubic-bezier(0.23, 1, 0.32, 1);
@mixin scrollable {
  overflow: auto;
}
@mixin no-scrollbar {
  &::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    opacity: 0 !important;
  }
}
.drawer-fade-enter-active {
  animation: drawer-fade-in 0.45s;
}
.drawer-fade-leave-active {
  animation: drawer-fade-out 0.45s;
  visibility: hidden;
}

@keyframes drawer-fade-in {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
}

@keyframes drawer-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    transform: translate3d(100%, 0, 0);
    visibility: hidden;
  }
}
.nio-drawer {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  border-radius: 0;
  transition: all 0.45s $--easeOutFunction;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  .nio-drawer-box {
    position: relative;
    height: 100%;
    background-color: white;
    .btn-close {
      background-color: white;
      transition: width 0.3s;
      width: 28px;
      font-size: 12px;
      display: inline-block;
      height: 80px;
      line-height: 80px;
      // box-shadow: -3px 3px 5px 1px #ccc;
      border: 1px solid #eee;
      border-left: none;
      position: absolute;
      left: -28px;
      top: 50%;
      margin-top: -40px;
      text-align: center;
      border-radius: 8px 0 0 8px;
      cursor: pointer;
      z-index: 10086;
    }
    .nio-drawer-content {
      height: 100%;
      @include scrollable;
      @include no-scrollbar;
    }
  }
  &.right {
    right: 0;
    left: auto;
  }
}
</style>
