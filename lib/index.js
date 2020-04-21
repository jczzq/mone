"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.install = install;
exports.default = exports.version = void 0;

var _button = _interopRequireDefault(require("./button"));

exports.Button = _button.default;

var _core = _interopRequireDefault(require("./core"));

exports.Core = _core.default;

var _icon = _interopRequireDefault(require("./icon"));

exports.Icon = _icon.default;

var _info = _interopRequireDefault(require("./info"));

exports.Info = _info.default;

var _lazyload = _interopRequireDefault(require("./lazyload"));

exports.Lazyload = _lazyload.default;

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading.default;

var _locale = _interopRequireDefault(require("./locale"));

exports.Locale = _locale.default;

var _view = _interopRequireDefault(require("./view"));

exports.View = _view.default;
var version = '0.0.1';
exports.version = version;

function install(Vue) {
  var components = [_button.default, _core.default, _icon.default, _info.default, _loading.default, _locale.default, _view.default];
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

var _default = {
  install: install,
  version: version
};
exports.default = _default;