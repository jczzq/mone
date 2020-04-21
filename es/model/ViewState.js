import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import { get } from '../utils/index';
import { deepClone } from '../utils/deep-clone';
import config from '../config';

/**
 * 搜索条件对象
 * 使用示例：
 * ```js
 * var p = new MoneParameter({
 *     sort: {
 *         prop: 'code'
 *         order: 'asc|desc'
 *     },
 *     page: {
 *         currentPage: 1
 *         pageSize: 20
 *     },
 *     query: {
 *         keyword: 'test',
 *         categorieId: 33213444432,
 *         date: '2018-10-10',
 *         time: '10:00:00',
 *         datetime: '2018-10-10 10:00:00',
 *         categories: new MoneQueryData({
 *             value: [1, 2, 3],
 *             option: 'eq_long',
 *             extra: '$last'
 *         })
 *     }
 * })
 * // 可以通过重载format方法 改变数据结构，得到结果为：
 * {
 *     sort_asc: 'code',
 *     keyword: 'test',
 *     categorieId_eq_long: 33213444432,
 *     date_eq_date: '2018-10-10',
 *     time_eq_time: '10:00:00',
 *     datetime_eq_datetime: '2018-10-10 10:00:00',
 *     categories_eq_long: 3
 * }
 * ```
 * @export
 * @class MoneParameter
 */
export var MoneParameter = function MoneParameter(_temp) {
  var _ref2,
      _this = this;

  var _ref = _temp === void 0 ? {
    query: {}
  } : _temp,
      query = _ref.query,
      sort = _ref.sort,
      page = _ref.page,
      format = _ref.format;

  this.sort = sort || {};
  this.page = page || (_ref2 = {}, _ref2[config.page.pageName] = 1, _ref2[config.page.sizeName] = 20, _ref2);
  this.query = query || {};

  if (format || config.parameterFormat) {
    this.format = format || config.parameterFormat || function () {
      return deepClone(_this);
    };
  }
};
var MoneQueryDataOptionEnum;

(function (MoneQueryDataOptionEnum) {
  MoneQueryDataOptionEnum["EQ"] = "eq";
  MoneQueryDataOptionEnum["NE"] = "ne";
  MoneQueryDataOptionEnum["LT"] = "lt";
  MoneQueryDataOptionEnum["GT"] = "lt";
  MoneQueryDataOptionEnum["LE"] = "lt";
  MoneQueryDataOptionEnum["GE"] = "lt";
})(MoneQueryDataOptionEnum || (MoneQueryDataOptionEnum = {}));

var MoneQueryDataFormatEnum;
/**
 * query参数
 * @export
 * @class MoneQueryData
 */

(function (MoneQueryDataFormatEnum) {
  MoneQueryDataFormatEnum["FIRST"] = "$first";
  MoneQueryDataFormatEnum["LAST"] = "$last";
  MoneQueryDataFormatEnum["TOSTRING"] = "$toString";
})(MoneQueryDataFormatEnum || (MoneQueryDataFormatEnum = {}));

export var MoneQueryData = // 业务参数对象，一般为需要特殊操作的引用类型
// 比较类型
function MoneQueryData(_temp2) {
  var _this2 = this;

  var _ref3 = _temp2 === void 0 ? {
    value: null
  } : _temp2,
      value = _ref3.value,
      option = _ref3.option,
      format = _ref3.format;

  this.value = value;
  this.option = option || MoneQueryDataOptionEnum.EQ;
  var t = typeof format;

  if (t === 'string') {
    switch (format) {
      case MoneQueryDataFormatEnum.FIRST:
        this.format = function (array) {
          if (array && array.length) {
            return array[0];
          }

          return array;
        };

        break;

      case MoneQueryDataFormatEnum.LAST:
        this.format = function (array) {
          if (array && array.length) {
            return array[_this2.value.length - 1];
          }

          return array;
        };

        break;

      case MoneQueryDataFormatEnum.TOSTRING:
        this.format = function (a) {
          return a.toString();
        };

        break;

      default:
        this.format = function (a) {
          return a;
        };

        break;
    }
  } else if (t === 'function') {
    this.format = format.bind(this);
  } else {
    throw new Error('`format` must be a string or function, got a ' + t);
  }
};
/**
 * 视图模型
 */

export var CommonView = function CommonView(data, flag) {
  var _this3 = this;

  if (flag === void 0) {
    flag = true;
  }

  this.loading = false;
  this.visible = false;

  if (data) {
    if (flag) {
      _extends(this, data);
    } else {
      Object.keys(this).forEach(function (key) {
        if (key && data.hasOwnProperty(key)) {
          _this3[key] = data[key];
        }
      });
    }
  }
}; // 列表视图

export var ListView = /*#__PURE__*/function (_CommonView) {
  _inheritsLoose(ListView, _CommonView);

  function ListView(data) {
    var _this4;

    _this4 = _CommonView.call(this) || this;
    _this4.rows = [];
    _this4.total = 0;
    _this4.rowsName = config.rowsName;
    _this4.totalName = config.totalName;

    if (data) {
      _extends(_assertThisInitialized(_this4), data);

      _this4.initParameters(data.parameters);
    } else {
      _this4.initParameters();
    }

    return _this4;
  }

  var _proto = ListView.prototype;

  _proto.initParameters = function initParameters(data) {
    if (data) {
      this._parameters = data;
    }

    this.parameters = new MoneParameter();

    if (this._parameters) {
      this.parameters = deepClone(this._parameters);
    }
  };

  _proto.sizeChange = function sizeChange(size) {
    this.parameters.query.size = size;
  };

  _proto.load = /*#__PURE__*/function () {
    var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var args,
          req,
          res,
          _args = arguments;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              args = Array.from(_args);
              req = args.shift();
              this.loading = true;
              _context.next = 6;
              return req.apply(req, args);

            case 6:
              res = _context.sent;
              this.rows = get(res, this.rowsName);
              this.total = get(res, this.totalName);
              return _context.abrupt("return", Promise.resolve(res));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.info('ListView load data error', _context.t0);
              return _context.abrupt("return", Promise.reject(_context.t0));

            case 16:
              _context.prev = 16;
              this.loading = false;
              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12, 16, 19]]);
    }));

    function load() {
      return _load.apply(this, arguments);
    }

    return load;
  }();

  return ListView;
}(CommonView); // 详情视图

export var DetailView = /*#__PURE__*/function (_CommonView2) {
  _inheritsLoose(DetailView, _CommonView2);

  function DetailView(data) {
    var _this5;

    _this5 = _CommonView2.call(this) || this;
    _this5.instance = {};
    _this5.deleting = false;
    _this5.instanceName = 'data';

    if (data) {
      _extends(_assertThisInitialized(_this5), data);
    }

    return _this5;
  }

  var _proto2 = DetailView.prototype;

  _proto2.clone = function clone() {
    return deepClone(this.instance);
  };

  _proto2.delete = /*#__PURE__*/function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var args,
          req,
          res,
          _args2 = arguments;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              args = Array.from(_args2);
              req = args.shift();
              this.deleting = true;
              _context2.next = 6;
              return req.apply(req, args);

            case 6:
              res = _context2.sent;
              return _context2.abrupt("return", Promise.resolve(res));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.info('DetailView delete data error', _context2.t0);
              return _context2.abrupt("return", Promise.reject(_context2.t0));

            case 14:
              _context2.prev = 14;
              this.deleting = false;
              return _context2.finish(14);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 10, 14, 17]]);
    }));

    function _delete() {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }();

  _proto2.load = /*#__PURE__*/function () {
    var _load2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var args,
          req,
          res,
          _args3 = arguments;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              args = Array.from(_args3);
              req = args.shift();
              this.loading = true;
              _context3.next = 6;
              return req.apply(req, args);

            case 6:
              res = _context3.sent;
              this.instance = res[this.instanceName];
              return _context3.abrupt("return", Promise.resolve(res));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              console.info('DetailView load data error', _context3.t0);
              return _context3.abrupt("return", Promise.reject(_context3.t0));

            case 15:
              _context3.prev = 15;
              this.loading = false;
              return _context3.finish(15);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 11, 15, 18]]);
    }));

    function load() {
      return _load2.apply(this, arguments);
    }

    return load;
  }();

  return DetailView;
}(CommonView); // 表单视图

export var FormView = /*#__PURE__*/function (_DetailView) {
  _inheritsLoose(FormView, _DetailView);

  // 是否为编辑状态
  function FormView(data) {
    var _this6;

    _this6 = _DetailView.call(this) || this;
    _this6.rules = {};
    _this6.editing = false;
    _this6.submitting = false;

    if (data) {
      _extends(_assertThisInitialized(_this6), data);
    }

    return _this6;
  }

  var _proto3 = FormView.prototype;

  _proto3.submit = function submit() {
    var _this7 = this;

    var args = Array.from(arguments);
    var req = args.shift();
    return new Promise(function (resolve, reject) {
      _this7.submitting = true;
      req.apply(req, args).then(function (res) {
        _this7.submitting = false;
        resolve(res);
      }).catch(function (err) {
        _this7.submitting = false;
        reject(err);
      });
    });
  };

  return FormView;
}(DetailView);