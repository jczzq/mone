import Form from './src/main.vue';

Form.install = function(Vue) {
    if (Form.installed) return;
    Vue.component(Form.name, Form);
    Form.installed = true;
};

export default Form;
