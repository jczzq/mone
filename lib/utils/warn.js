"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.tip = exports.warn = void 0;

var _config = _interopRequireDefault(require("../config"));

/* eslint-disable @typescript-eslint/no-unused-vars */
var noop = function noop(msg) {};

var warn = noop;
exports.warn = warn;
var tip = noop;
exports.tip = tip;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';

  exports.warn = warn = function warn(msg) {
    if (_config.default.warnHandler) {
      _config.default.warnHandler.call(null, msg);
    } else if (hasConsole && !_config.default.silent) {
      console.error("[Mone warn]: " + msg);
    }
  };

  exports.tip = tip = function tip(msg) {
    if (hasConsole && !_config.default.silent) {
      console.warn("[Mone tip]: " + msg);
    }
  };
}