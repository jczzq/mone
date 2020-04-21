import Menu from "./src/main";

Menu.install = function(Vue) {
  if (Menu.installed) return;
  Vue.component(Menu.name, Menu);
  Menu.installed = true;
};

export default Menu;
