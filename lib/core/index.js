"use strict";

exports.__esModule = true;
exports.default = void 0;

var _globalApi = require("./global-api");

var _warn = require("../utils/warn");

function Mone(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Mone)) {
    (0, _warn.warn)('Vue is a constructor and should be called with the `new` keyword');
  }
}

(0, _globalApi.initGlobalAPI)(Mone);
var _default = Mone;
exports.default = _default;