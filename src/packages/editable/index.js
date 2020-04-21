import Editable from './src/editable';

Editable.install = function(Vue) {
    if (Editable.installed) return;

    Vue.component(Editable.name, Editable);
    Editable.installed = true;
};

if (typeof window !== 'undefined' && window.Vue) {
    Editable.install(window.Vue);
}

export default Editable;
