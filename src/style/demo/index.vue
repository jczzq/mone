<template>
  <demo-section>
    <demo-block :title="$t('ellipsis')">
      <div class="mone-ellipsis">{{ $t('text1') }}</div>
      <div class="mone-multi-ellipsis--l2">{{ $t('text2') }}</div>
    </demo-block>

    <demo-block :title="$t('hairline')">
      <div class="mone-hairline--top" />
    </demo-block>

    <demo-block :title="$t('animation')">
      <van-cell
        is-link
        title="Fade"
      />
    </demo-block>


    <transition :name="transitionName">
      <div
        v-show="show"
        class="demo-animate-block"
      />
    </transition>

    <demo-block title="Flex">
      <div class="bgc-white p-3">
        <p class="m-b-3">横向布局</p>
        <p class="mone-flex-row space-between_center m-b-5">
          <span class="blue-block small">1</span>
          <span class="blue-block mone-flex--4">40%</span>
          <span class="mone-flex-row center_center bgc-black tc-white">居中</span>
        </p>
        <p class="m-b-3 word-break-all">纵向布局</p>
        <p class="mone-flex-column space-between_center" style="height: 300px">
          <span class="blue-block">1</span>
          <span class="mone-flex-row center_center small bgc-primary">2</span>
          <span class="blue-block">3</span>
        </p>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import Vue from 'vue';
import { Cell } from 'vant';

Vue.use(Cell);

export default {
  i18n: {
    'zh-CN': {
      hairline: '1px 边框',
      ellipsis: '文字省略',
      animation: '动画',
      toggle: '切换动画',
      text1: '这是一段最多显示一行的文字，后面的内容会省略',
      text2: '这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略'
    },
    'en-US': {
      hairline: 'Hairline',
      ellipsis: 'Text Ellipsis',
      animation: 'Animation',
      toggle: 'Switch animation',
      text1: 'This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.',
      text2: 'This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.'
    }
  },

  data() {
    return {
      show: false,
      transitionName: ''
    };
  },

  methods: {
    animate(transitionName) {
      this.show = true;
      this.transitionName = transitionName;

      setTimeout(() => {
        this.show = false;
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-style {
  .mone-ellipsis,
  .mone-multi-ellipsis--l2 {
    max-width: 300px;
    margin-left: @padding-md;
    font-size: 14px;
    line-height: 18px;
  }

  .mone-ellipsis {
    margin-bottom: @padding-md;
  }

  .mone-hairline--top {
    height: 30px;
    background-color: @white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
    border-radius: 3px;
  }
}
.blue-block {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: @blue;
  border-radius: 3px;
}
.small {
  width: 50px;
  height: 50px;
}
</style>
