<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <nio-view view-type="van-button" type="primary">{{ $t('button') }}1</nio-view>
      <component :is="'van-button'" type="danger">{{ $t('button') }}2</component>
      <van-button type="danger">{{ $t('button') }}3</van-button>
    </demo-block>

    <demo-block :title="$t('type')">
      <nio-view
        :config="{
          viewType: 'van-button',
          attrs: { type: 'primary' },
          on: {
            click() { alert() }
          }
        }"
      >{{ $t('button') }}1</nio-view>
      <van-button type="danger" @click="alert()">{{ $t('button') }}2</van-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      button: '按钮'
    },
    'en-US': {
      type: 'Type',
      button: 'Button'
    }
  },
  methods: {
    alert() {
      window.alert('ε=(´ο｀*)))');
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
</style>
