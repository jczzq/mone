"use strict";

exports.__esModule = true;
exports.MoneBase = void 0;

/* eslint-disable */
var MoneBase = /*#__PURE__*/function () {
  function MoneBase(data) {} // 装箱（data参数支持数组进行批量装箱）


  MoneBase.inbox = function inbox(data) {
    var _this = this;

    if (!data || _this === MoneBase) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(function (x) {
        return _this.inbox(x);
      });
    } else {
      return new _this(data);
    }
  };

  return MoneBase;
}();

exports.MoneBase = MoneBase;