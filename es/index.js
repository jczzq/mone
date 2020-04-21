import Button from './button';
import Core from './core';
import Icon from './icon';
import Info from './info';
import Lazyload from './lazyload';
import Loading from './loading';
import Locale from './locale';
import View from './view';
var version = '0.0.1';

function install(Vue) {
  var components = [Button, Core, Icon, Info, Loading, Locale, View];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, version, Button, Core, Icon, Info, Lazyload, Loading, Locale, View };
export default {
  install: install,
  version: version
};