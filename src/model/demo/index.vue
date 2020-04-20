<template>
  <demo-section>
    <demo-block :title="$t('cv')">
      <div class="p-3">
        <p>new CommonView()</p>
        <pre>{{ JSON.stringify(cv, null, 2) }}</pre>
      </div>
    </demo-block>
    <demo-block :title="$t('lv')">
      <div class="p-3">
        <p>new ListView()</p>
        <pre>{{ JSON.stringify(lv, null, 2) }}</pre>
      </div>
    </demo-block>
    <demo-block :title="$t('mp')">
      <div class="p-3">
        <p>new MoneParameter()</p>
        <pre>{{ JSON.stringify(mp, null, 2) }}</pre>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import { CommonView, ListView, MoneParameter } from '../ViewState.ts';

export default {
  i18n: {
    'zh-CN': {
      cv: 'CommonView 通用视图',
      lv: 'ListView 列表视图',
      mp: 'MoneParameter 查询参数'
    },
    'en-US': {}
  },
  data() {
    return {
      mp: new MoneParameter(),
      cv: new CommonView(),
      lv: new ListView()
    };
  },
  methods: {
    alert() {
      console.log('ε=(´ο｀*)))');
    }
  }
};
</script>
