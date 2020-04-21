"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.initGlobalAPI = initGlobalAPI;

var _config = _interopRequireDefault(require("../../config"));

var _warn = require("../../utils/warn");

function initGlobalAPI(Mone) {
  // config
  var configDef = {};

  configDef.get = function () {
    return _config.default;
  };

  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      (0, _warn.warn)('Do not replace the Mone.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Mone, 'config', configDef);
}