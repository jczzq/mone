import config from '../config';
/* eslint-disable @typescript-eslint/no-unused-vars */

var noop = function noop(msg) {};

export var warn = noop;
export var tip = noop;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';

  warn = function warn(msg) {
    if (config.warnHandler) {
      config.warnHandler.call(null, msg);
    } else if (hasConsole && !config.silent) {
      console.error("[Mone warn]: " + msg);
    }
  };

  tip = function tip(msg) {
    if (hasConsole && !config.silent) {
      console.warn("[Mone tip]: " + msg);
    }
  };
}