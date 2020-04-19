(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("mone", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["mone"] = factory(require("vue"));
	else
		root["mone"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() {
  return _extends = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) {
      for (var d in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
      }
    }

    return a;
  }, _extends.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function mergeJsxProps(a) {
  return a.reduce(function (c, a) {
    for (var b in a) {
      if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
            e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = d.concat(e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) {
          if (c[b][f]) {
            var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
            c[b][f] = g.concat(h);
          } else c[b][f] = a[b][f];
        }
      } else if ("hook" == b) for (var i in a[b]) {
        c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
      } else c[b] = a[b];
    }

    return c;
  }, {});
},
    mergeFn = function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

module.exports = mergeJsxProps;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  function e(e) {
    return e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }

  function t(e) {
    e = e || {};
    var t = arguments.length,
        i = 0;
    if (1 === t) return e;

    for (; ++i < t;) {
      var o = arguments[i];
      g(e) && (e = o), r(o) && n(e, o);
    }

    return e;
  }

  function n(e, n) {
    m(e, n);

    for (var o in n) {
      if ("__proto__" !== o && i(n, o)) {
        var a = n[o];
        r(a) ? ("undefined" === L(e[o]) && "function" === L(a) && (e[o] = a), e[o] = t(e[o] || {}, a)) : e[o] = a;
      }
    }

    return e;
  }

  function r(e) {
    return "object" === L(e) || "function" === L(e);
  }

  function i(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function o(e, t) {
    if (e.length) {
      var n = e.indexOf(t);
      return n > -1 ? e.splice(n, 1) : void 0;
    }
  }

  function a(e, t) {
    for (var n = !1, r = 0, i = e.length; r < i; r++) {
      if (t(e[r])) {
        n = !0;
        break;
      }
    }

    return n;
  }

  function s(e, t) {
    if ("IMG" === e.tagName && e.getAttribute("data-srcset")) {
      var n = e.getAttribute("data-srcset"),
          r = [],
          i = e.parentNode,
          o = i.offsetWidth * t,
          a = void 0,
          s = void 0,
          u = void 0;
      n = n.trim().split(","), n.map(function (e) {
        e = e.trim(), a = e.lastIndexOf(" "), -1 === a ? (s = e, u = 999998) : (s = e.substr(0, a), u = parseInt(e.substr(a + 1, e.length - a - 2), 10)), r.push([u, s]);
      }), r.sort(function (e, t) {
        if (e[0] < t[0]) return -1;
        if (e[0] > t[0]) return 1;

        if (e[0] === t[0]) {
          if (-1 !== t[1].indexOf(".webp", t[1].length - 5)) return 1;
          if (-1 !== e[1].indexOf(".webp", e[1].length - 5)) return -1;
        }

        return 0;
      });

      for (var l = "", d = void 0, c = r.length, h = 0; h < c; h++) {
        if (d = r[h], d[0] >= o) {
          l = d[1];
          break;
        }
      }

      return l;
    }
  }

  function u(e, t) {
    for (var n = void 0, r = 0, i = e.length; r < i; r++) {
      if (t(e[r])) {
        n = e[r];
        break;
      }
    }

    return n;
  }

  function l() {
    if (!k) return !1;
    var e = !0,
        t = document;

    try {
      var n = t.createElement("object");
      n.type = "image/webp", n.style.visibility = "hidden", n.innerHTML = "!", t.body.appendChild(n), e = !n.offsetWidth, t.body.removeChild(n);
    } catch (t) {
      e = !1;
    }

    return e;
  }

  function d(e, t) {
    var n = null,
        r = 0;
    return function () {
      if (!n) {
        var i = Date.now() - r,
            o = this,
            a = arguments,
            s = function s() {
          r = Date.now(), n = !1, e.apply(o, a);
        };

        i >= t ? s() : n = setTimeout(s, t);
      }
    };
  }

  function c(e) {
    return null !== e && "object" === (void 0 === e ? "undefined" : p(e));
  }

  function h(e) {
    if (!(e instanceof Object)) return [];
    if (Object.keys) return Object.keys(e);
    var t = [];

    for (var n in e) {
      e.hasOwnProperty(n) && t.push(n);
    }

    return t;
  }

  function f(e) {
    for (var t = e.length, n = [], r = 0; r < t; r++) {
      n.push(e[r]);
    }

    return n;
  }

  function v() {}

  var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      b = function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      y = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      g = function g(e) {
    return null == e || "function" != typeof e && "object" !== (void 0 === e ? "undefined" : p(e));
  },
      m = function m(e, t) {
    if (null === e || void 0 === e) throw new TypeError("expected first argument to be an object.");
    if (void 0 === t || "undefined" == typeof Symbol) return e;
    if ("function" != typeof Object.getOwnPropertySymbols) return e;

    for (var n = Object.prototype.propertyIsEnumerable, r = Object(e), i = arguments.length, o = 0; ++o < i;) {
      for (var a = Object(arguments[o]), s = Object.getOwnPropertySymbols(a), u = 0; u < s.length; u++) {
        var l = s[u];
        n.call(a, l) && (r[l] = a[l]);
      }
    }

    return r;
  },
      w = Object.prototype.toString,
      L = function L(t) {
    var n = void 0 === t ? "undefined" : p(t);
    return "undefined" === n ? "undefined" : null === t ? "null" : !0 === t || !1 === t || t instanceof Boolean ? "boolean" : "string" === n || t instanceof String ? "string" : "number" === n || t instanceof Number ? "number" : "function" === n || t instanceof Function ? void 0 !== t.constructor.name && "Generator" === t.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(t) ? "array" : t instanceof RegExp ? "regexp" : t instanceof Date ? "date" : (n = w.call(t), "[object RegExp]" === n ? "regexp" : "[object Date]" === n ? "date" : "[object Arguments]" === n ? "arguments" : "[object Error]" === n ? "error" : "[object Promise]" === n ? "promise" : e(t) ? "buffer" : "[object Set]" === n ? "set" : "[object WeakSet]" === n ? "weakset" : "[object Map]" === n ? "map" : "[object WeakMap]" === n ? "weakmap" : "[object Symbol]" === n ? "symbol" : "[object Map Iterator]" === n ? "mapiterator" : "[object Set Iterator]" === n ? "setiterator" : "[object String Iterator]" === n ? "stringiterator" : "[object Array Iterator]" === n ? "arrayiterator" : "[object Int8Array]" === n ? "int8array" : "[object Uint8Array]" === n ? "uint8array" : "[object Uint8ClampedArray]" === n ? "uint8clampedarray" : "[object Int16Array]" === n ? "int16array" : "[object Uint16Array]" === n ? "uint16array" : "[object Int32Array]" === n ? "int32array" : "[object Uint32Array]" === n ? "uint32array" : "[object Float32Array]" === n ? "float32array" : "[object Float64Array]" === n ? "float64array" : "object");
  },
      _ = t,
      k = "undefined" != typeof window,
      E = k && "IntersectionObserver" in window,
      A = {
    event: "event",
    observer: "observer"
  },
      j = function () {
    function e(e, t) {
      t = t || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }

    if (k) return "function" == typeof window.CustomEvent ? window.CustomEvent : (e.prototype = window.Event.prototype, e);
  }(),
      z = function z() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return k ? window.devicePixelRatio || e : e;
  },
      T = function () {
    if (k) {
      var e = !1;

      try {
        var t = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        window.addEventListener("test", null, t);
      } catch (e) {}

      return e;
    }
  }(),
      O = {
    on: function on(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      T ? e.addEventListener(t, n, {
        capture: r,
        passive: !0
      }) : e.addEventListener(t, n, r);
    },
    off: function off(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      e.removeEventListener(t, n, r);
    }
  },
      I = function I(e, t, n) {
    var r = new Image();
    r.src = e.src, r.onload = function () {
      t({
        naturalHeight: r.naturalHeight,
        naturalWidth: r.naturalWidth,
        src: r.src
      });
    }, r.onerror = function (e) {
      n(e);
    };
  },
      x = function x(e, t) {
    return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t];
  },
      S = function S(e) {
    return x(e, "overflow") + x(e, "overflow-y") + x(e, "overflow-x");
  },
      $ = function $(e) {
    if (k) {
      if (!(e instanceof HTMLElement)) return window;

      for (var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode;) {
        if (/(scroll|auto)/.test(S(t))) return t;
        t = t.parentNode;
      }

      return window;
    }
  },
      H = {},
      Q = function () {
    function e(t) {
      var n = t.el,
          r = t.src,
          i = t.error,
          o = t.loading,
          a = t.bindType,
          s = t.$parent,
          u = t.options,
          l = t.elRenderer;
      b(this, e), this.el = n, this.src = r, this.error = i, this.loading = o, this.bindType = a, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, this.rect = null, this.$parent = s, this.elRenderer = l, this.performanceData = {
        init: Date.now(),
        loadStart: 0,
        loadEnd: 0
      }, this.filter(), this.initState(), this.render("loading", !1);
    }

    return y(e, [{
      key: "initState",
      value: function value() {
        this.el.dataset.src = this.src, this.state = {
          error: !1,
          loaded: !1,
          rendered: !1
        };
      }
    }, {
      key: "record",
      value: function value(e) {
        this.performanceData[e] = Date.now();
      }
    }, {
      key: "update",
      value: function value(e) {
        var t = e.src,
            n = e.loading,
            r = e.error,
            i = this.src;
        this.src = t, this.loading = n, this.error = r, this.filter(), i !== this.src && (this.attempt = 0, this.initState());
      }
    }, {
      key: "getRect",
      value: function value() {
        this.rect = this.el.getBoundingClientRect();
      }
    }, {
      key: "checkInView",
      value: function value() {
        return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;
      }
    }, {
      key: "filter",
      value: function value() {
        var e = this;
        h(this.options.filter).map(function (t) {
          e.options.filter[t](e, e.options);
        });
      }
    }, {
      key: "renderLoading",
      value: function value(e) {
        var t = this;
        I({
          src: this.loading
        }, function (n) {
          t.render("loading", !1), e();
        }, function () {
          e(), t.options.silent || console.warn("VueLazyload log: load failed with loading image(" + t.loading + ")");
        });
      }
    }, {
      key: "load",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
        return this.attempt > this.options.attempt - 1 && this.state.error ? (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times"), void t()) : this.state.loaded || H[this.src] ? (this.state.loaded = !0, t(), this.render("loaded", !0)) : void this.renderLoading(function () {
          e.attempt++, e.record("loadStart"), I({
            src: e.src
          }, function (n) {
            e.naturalHeight = n.naturalHeight, e.naturalWidth = n.naturalWidth, e.state.loaded = !0, e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), H[e.src] = 1, t();
          }, function (t) {
            !e.options.silent && console.error(t), e.state.error = !0, e.state.loaded = !1, e.render("error", !1);
          });
        });
      }
    }, {
      key: "render",
      value: function value(e, t) {
        this.elRenderer(this, e, t);
      }
    }, {
      key: "performance",
      value: function value() {
        var e = "loading",
            t = 0;
        return this.state.loaded && (e = "loaded", t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (e = "error"), {
          src: this.src,
          state: e,
          time: t
        };
      }
    }, {
      key: "destroy",
      value: function value() {
        this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0;
      }
    }]), e;
  }(),
      C = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      R = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
      W = {
    rootMargin: "0px",
    threshold: 0
  },
      D = function D(e) {
    return function () {
      function t(e) {
        var n = e.preLoad,
            r = e.error,
            i = e.throttleWait,
            o = e.preLoadTop,
            a = e.dispatchEvent,
            s = e.loading,
            u = e.attempt,
            c = e.silent,
            h = void 0 === c || c,
            f = e.scale,
            v = e.listenEvents,
            p = (e.hasbind, e.filter),
            y = e.adapter,
            g = e.observer,
            m = e.observerOptions;
        b(this, t), this.version = "1.2.3", this.mode = A.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
          silent: h,
          dispatchEvent: !!a,
          throttleWait: i || 200,
          preLoad: n || 1.3,
          preLoadTop: o || 0,
          error: r || C,
          loading: s || C,
          attempt: u || 3,
          scale: f || z(f),
          ListenEvents: v || R,
          hasbind: !1,
          supportWebp: l(),
          filter: p || {},
          adapter: y || {},
          observer: !!g,
          observerOptions: m || W
        }, this._initEvent(), this.lazyLoadHandler = d(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? A.observer : A.event);
      }

      return y(t, [{
        key: "config",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          _(this.options, e);
        }
      }, {
        key: "performance",
        value: function value() {
          var e = [];
          return this.ListenerQueue.map(function (t) {
            e.push(t.performance());
          }), e;
        }
      }, {
        key: "addLazyBox",
        value: function value(e) {
          this.ListenerQueue.push(e), k && (this._addListenerTarget(window), this._observer && this._observer.observe(e.el), e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode));
        }
      }, {
        key: "add",
        value: function value(t, n, r) {
          var i = this;
          if (a(this.ListenerQueue, function (e) {
            return e.el === t;
          })) return this.update(t, n), e.nextTick(this.lazyLoadHandler);

          var o = this._valueFormatter(n.value),
              u = o.src,
              l = o.loading,
              d = o.error;

          e.nextTick(function () {
            u = s(t, i.options.scale) || u, i._observer && i._observer.observe(t);
            var o = Object.keys(n.modifiers)[0],
                a = void 0;
            o && (a = r.context.$refs[o], a = a ? a.$el || a : document.getElementById(o)), a || (a = $(t));
            var c = new Q({
              bindType: n.arg,
              $parent: a,
              el: t,
              loading: l,
              error: d,
              src: u,
              elRenderer: i._elRenderer.bind(i),
              options: i.options
            });
            i.ListenerQueue.push(c), k && (i._addListenerTarget(window), i._addListenerTarget(a)), i.lazyLoadHandler(), e.nextTick(function () {
              return i.lazyLoadHandler();
            });
          });
        }
      }, {
        key: "update",
        value: function value(t, n) {
          var r = this,
              i = this._valueFormatter(n.value),
              o = i.src,
              a = i.loading,
              l = i.error;

          o = s(t, this.options.scale) || o;
          var d = u(this.ListenerQueue, function (e) {
            return e.el === t;
          });
          d && d.update({
            src: o,
            loading: a,
            error: l
          }), this._observer && (this._observer.unobserve(t), this._observer.observe(t)), this.lazyLoadHandler(), e.nextTick(function () {
            return r.lazyLoadHandler();
          });
        }
      }, {
        key: "remove",
        value: function value(e) {
          if (e) {
            this._observer && this._observer.unobserve(e);
            var t = u(this.ListenerQueue, function (t) {
              return t.el === e;
            });
            t && (this._removeListenerTarget(t.$parent), this._removeListenerTarget(window), o(this.ListenerQueue, t) && t.destroy());
          }
        }
      }, {
        key: "removeComponent",
        value: function value(e) {
          e && (o(this.ListenerQueue, e), this._observer && this._observer.unobserve(e.el), e.$parent && e.$el.parentNode && this._removeListenerTarget(e.$el.parentNode), this._removeListenerTarget(window));
        }
      }, {
        key: "setMode",
        value: function value(e) {
          var t = this;
          E || e !== A.observer || (e = A.event), this.mode = e, e === A.event ? (this._observer && (this.ListenerQueue.forEach(function (e) {
            t._observer.unobserve(e.el);
          }), this._observer = null), this.TargetQueue.forEach(function (e) {
            t._initListen(e.el, !0);
          })) : (this.TargetQueue.forEach(function (e) {
            t._initListen(e.el, !1);
          }), this._initIntersectionObserver());
        }
      }, {
        key: "_addListenerTarget",
        value: function value(e) {
          if (e) {
            var t = u(this.TargetQueue, function (t) {
              return t.el === e;
            });
            return t ? t.childrenCount++ : (t = {
              el: e,
              id: ++this.TargetIndex,
              childrenCount: 1,
              listened: !0
            }, this.mode === A.event && this._initListen(t.el, !0), this.TargetQueue.push(t)), this.TargetIndex;
          }
        }
      }, {
        key: "_removeListenerTarget",
        value: function value(e) {
          var t = this;
          this.TargetQueue.forEach(function (n, r) {
            n.el === e && (--n.childrenCount || (t._initListen(n.el, !1), t.TargetQueue.splice(r, 1), n = null));
          });
        }
      }, {
        key: "_initListen",
        value: function value(e, t) {
          var n = this;
          this.options.ListenEvents.forEach(function (r) {
            return O[t ? "on" : "off"](e, r, n.lazyLoadHandler);
          });
        }
      }, {
        key: "_initEvent",
        value: function value() {
          var e = this;
          this.Event = {
            listeners: {
              loading: [],
              loaded: [],
              error: []
            }
          }, this.$on = function (t, n) {
            e.Event.listeners[t].push(n);
          }, this.$once = function (t, n) {
            function r() {
              i.$off(t, r), n.apply(i, arguments);
            }

            var i = e;
            e.$on(t, r);
          }, this.$off = function (t, n) {
            if (!n) return void (e.Event.listeners[t] = []);
            o(e.Event.listeners[t], n);
          }, this.$emit = function (t, n, r) {
            e.Event.listeners[t].forEach(function (e) {
              return e(n, r);
            });
          };
        }
      }, {
        key: "_lazyLoadHandler",
        value: function value() {
          var e = this,
              t = !1;
          this.ListenerQueue.forEach(function (n, r) {
            n.state.loaded || (t = n.checkInView()) && n.load(function () {
              !n.error && n.loaded && e.ListenerQueue.splice(r, 1);
            });
          });
        }
      }, {
        key: "_initIntersectionObserver",
        value: function value() {
          var e = this;
          E && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(function (t) {
            e._observer.observe(t.el);
          }));
        }
      }, {
        key: "_observerHandler",
        value: function value(e, t) {
          var n = this;
          e.forEach(function (e) {
            e.isIntersecting && n.ListenerQueue.forEach(function (t) {
              if (t.el === e.target) {
                if (t.state.loaded) return n._observer.unobserve(t.el);
                t.load();
              }
            });
          });
        }
      }, {
        key: "_elRenderer",
        value: function value(e, t, n) {
          if (e.el) {
            var r = e.el,
                i = e.bindType,
                o = void 0;

            switch (t) {
              case "loading":
                o = e.loading;
                break;

              case "error":
                o = e.error;
                break;

              default:
                o = e.src;
            }

            if (i ? r.style[i] = 'url("' + o + '")' : r.getAttribute("src") !== o && r.setAttribute("src", o), r.setAttribute("lazy", t), this.$emit(t, e, n), this.options.adapter[t] && this.options.adapter[t](e, this.options), this.options.dispatchEvent) {
              var a = new j(t, {
                detail: e
              });
              r.dispatchEvent(a);
            }
          }
        }
      }, {
        key: "_valueFormatter",
        value: function value(e) {
          var t = e,
              n = this.options.loading,
              r = this.options.error;
          return c(e) && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e), t = e.src, n = e.loading || this.options.loading, r = e.error || this.options.error), {
            src: t,
            loading: n,
            error: r
          };
        }
      }]), t;
    }();
  },
      B = function B(e) {
    return {
      props: {
        tag: {
          type: String,
          default: "div"
        }
      },
      render: function render(e) {
        return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default);
      },
      data: function data() {
        return {
          el: null,
          state: {
            loaded: !1
          },
          rect: {},
          show: !1
        };
      },
      mounted: function mounted() {
        this.el = this.$el, e.addLazyBox(this), e.lazyLoadHandler();
      },
      beforeDestroy: function beforeDestroy() {
        e.removeComponent(this);
      },
      methods: {
        getRect: function getRect() {
          this.rect = this.$el.getBoundingClientRect();
        },
        checkInView: function checkInView() {
          return this.getRect(), k && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0;
        },
        load: function load() {
          this.show = !0, this.state.loaded = !0, this.$emit("show", this);
        }
      }
    };
  },
      V = function () {
    function e(t) {
      var n = t.lazy;
      b(this, e), this.lazy = n, n.lazyContainerMananger = this, this._queue = [];
    }

    return y(e, [{
      key: "bind",
      value: function value(e, t, n) {
        var r = new N({
          el: e,
          binding: t,
          vnode: n,
          lazy: this.lazy
        });

        this._queue.push(r);
      }
    }, {
      key: "update",
      value: function value(e, t, n) {
        var r = u(this._queue, function (t) {
          return t.el === e;
        });
        r && r.update({
          el: e,
          binding: t,
          vnode: n
        });
      }
    }, {
      key: "unbind",
      value: function value(e, t, n) {
        var r = u(this._queue, function (t) {
          return t.el === e;
        });
        r && (r.clear(), o(this._queue, r));
      }
    }]), e;
  }(),
      M = {
    selector: "img"
  },
      N = function () {
    function e(t) {
      var n = t.el,
          r = t.binding,
          i = t.vnode,
          o = t.lazy;
      b(this, e), this.el = null, this.vnode = i, this.binding = r, this.options = {}, this.lazy = o, this._queue = [], this.update({
        el: n,
        binding: r
      });
    }

    return y(e, [{
      key: "update",
      value: function value(e) {
        var t = this,
            n = e.el,
            r = e.binding;
        this.el = n, this.options = _({}, M, r.value), this.getImgs().forEach(function (e) {
          t.lazy.add(e, _({}, t.binding, {
            value: {
              src: e.dataset.src,
              error: e.dataset.error,
              loading: e.dataset.loading
            }
          }), t.vnode);
        });
      }
    }, {
      key: "getImgs",
      value: function value() {
        return f(this.el.querySelectorAll(this.options.selector));
      }
    }, {
      key: "clear",
      value: function value() {
        var e = this;
        this.getImgs().forEach(function (t) {
          return e.lazy.remove(t);
        }), this.vnode = null, this.binding = null, this.lazy = null;
      }
    }]), e;
  }();

  return {
    install: function install(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = D(e),
          r = new n(t),
          i = new V({
        lazy: r
      }),
          o = "2" === e.version.split(".")[0];
      e.prototype.$Lazyload = r, t.lazyComponent && e.component("lazy-component", B(r)), o ? (e.directive("lazy", {
        bind: r.add.bind(r),
        update: r.update.bind(r),
        componentUpdated: r.lazyLoadHandler.bind(r),
        unbind: r.remove.bind(r)
      }), e.directive("lazy-container", {
        bind: i.bind.bind(i),
        update: i.update.bind(i),
        unbind: i.unbind.bind(i)
      })) : (e.directive("lazy", {
        bind: r.lazyLoadHandler.bind(r),
        update: function update(e, t) {
          _(this.vm.$refs, this.vm.$els), r.add(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: e,
            oldValue: t
          }, {
            context: this.vm
          });
        },
        unbind: function unbind() {
          r.remove(this.el);
        }
      }), e.directive("lazy-container", {
        update: function update(e, t) {
          i.update(this.el, {
            modifiers: this.modifiers || {},
            arg: this.arg,
            value: e,
            oldValue: t
          }, {
            context: this.vm
          });
        },
        unbind: function unbind() {
          i.unbind(this.el);
        }
      }));
    }
  };
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* binding */ es_install; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ version; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ es_button; });
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ es_icon; });
__webpack_require__.d(__webpack_exports__, "Info", function() { return /* reexport */ es_info; });
__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return /* reexport */ lazyload; });
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ es_loading; });
__webpack_require__.d(__webpack_exports__, "Locale", function() { return /* reexport */ locale; });
__webpack_require__.d(__webpack_exports__, "View", function() { return /* reexport */ view; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(1);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// CONCATENATED MODULE: ./es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function bem_prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return bem_prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, bem_prefix(el, mods)] : el;
  };
}
// CONCATENATED MODULE: ./es/utils/format/string.js
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create/component.js
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(camelize("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// CONCATENATED MODULE: ./es/utils/index.js



var isServer = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}
// CONCATENATED MODULE: ./es/utils/deep-assign.js

var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!isDef(val)) {
    return;
  }

  if (!deep_assign_hasOwnProperty.call(to, key) || !isObj(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  moneCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    }
  },
  moneContactCard: {
    addText: '添加联系人'
  },
  moneContactList: {
    addText: '新建联系人'
  },
  monePagination: {
    prev: '上一页',
    next: '下一页'
  },
  monePullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  moneSubmitBar: {
    label: '合计：'
  },
  moneCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  moneCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  moneCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  moneAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  moneAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  moneAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./es/locale/index.js



var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defineReactive = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deepAssign(proto.$vantMessages, messages);
  }
});
// CONCATENATED MODULE: ./es/utils/create/i18n.js



function createI18N(name) {
  var prefix = camelize(name) + '.';
  return function (path) {
    var message = get(locale.messages(), prefix + path) || get(locale.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./es/utils/create/index.js



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
// CONCATENATED MODULE: ./es/utils/functional.js


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    _extends(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, _extends({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
// CONCATENATED MODULE: ./es/utils/constant.js
// color
var RED = '#ee0a24';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_RIGHT = BORDER + "--right";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";
// CONCATENATED MODULE: ./es/utils/router.js
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err && err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
// CONCATENATED MODULE: ./es/utils/validate/number.js
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function number_isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}
// CONCATENATED MODULE: ./es/utils/format/unit.js


function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? value + "px" : value;
}
// CONCATENATED MODULE: ./es/info/index.js


 // Types

var _createNamespace = createNamespace('info'),
    info_createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", helper_default()([{
    "class": bem({
      dot: dot
    })
  }, inherit(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ var es_info = (info_createComponent(Info));
// CONCATENATED MODULE: ./es/icon/index.js



 // Types

var icon_createNamespace = createNamespace('icon'),
    icon_createComponent = icon_createNamespace[0],
    icon_bem = icon_createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var name = correctName(props.name);
  var imageIcon = isImage(name);
  return h(props.tag, helper_default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: addUnit(props.size)
    }
  }, inherit(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": icon_bem('image'),
    "attrs": {
      "src": name
    }
  }), h(es_info, {
    "attrs": {
      "dot": props.dot,
      "info": props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: icon_bem()
  }
};
/* harmony default export */ var es_icon = (icon_createComponent(Icon));
// CONCATENATED MODULE: ./es/loading/index.js


 // Types

var loading_createNamespace = createNamespace('loading'),
    loading_createComponent = loading_createNamespace[0],
    loading_bem = loading_createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": loading_bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: addUnit(props.textSize)
    };
    return h("span", {
      "class": loading_bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = addUnit(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", helper_default()([{
    "class": loading_bem([type, {
      vertical: props.vertical
    }])
  }, inherit(ctx, true)]), [h("span", {
    "class": loading_bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  }
};
/* harmony default export */ var es_loading = (loading_createComponent(Loading));
// CONCATENATED MODULE: ./es/button/index.js







 // Types

var button_createNamespace = createNamespace('button'),
    button_createComponent = button_createNamespace[0],
    button_bem = button_createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event) {
    emit(ctx, 'touchstart', event);
  }

  var classes = [button_bem([type, props.size, {
    plain: plain,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[BORDER_SURROUND] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(es_loading, {
        "class": button_bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": "currentColor"
        }
      }));
    } else if (icon) {
      content.push(h(es_icon, {
        "attrs": {
          "name": icon
        },
        "class": button_bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": button_bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, helper_default()([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, inherit(ctx)]), [Content()]);
}

Button.props = _extends({}, routeProps, {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ var es_button = (button_createComponent(Button));
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(2);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/view/index.js

/**
 * 将配置注入到组件的VNode Data对象，从而控制组件
 */

/* harmony default export */ var view = ({
  name: 'nio-view',
  functional: true,
  inject: {
    ViewGroup: {
      default: null
    }
  },
  render: function render(h, context) {
    var config = context.data.attrs.config || {};
    delete context.data.attrs.config;
    var viewType = config.viewType || context.data.attrs['view-type'];

    if (!viewType) {
      console.error('view require prop `viewType`');
      return;
    }

    var viewKey = config.viewKey,
        _config$attrs = config.attrs,
        attrs = _config$attrs === void 0 ? {} : _config$attrs,
        _config$props = config.props,
        props = _config$props === void 0 ? {} : _config$props,
        style = config.style,
        _config$on = config.on,
        on = _config$on === void 0 ? {} : _config$on,
        _config$nativeOn = config.nativeOn,
        nativeOn = _config$nativeOn === void 0 ? {} : _config$nativeOn,
        _config$domProps = config.domProps,
        domProps = _config$domProps === void 0 ? {} : _config$domProps,
        _config$directives = config.directives,
        directives = _config$directives === void 0 ? [] : _config$directives,
        _config$scopedSlots = config.scopedSlots,
        scopedSlots = _config$scopedSlots === void 0 ? {} : _config$scopedSlots,
        slot = config.slot,
        key = config.key,
        refInFor = config.refInFor,
        _config$trigger = config.trigger,
        trigger = _config$trigger === void 0 ? [] : _config$trigger;
    context.data.class = context.data.class || config.class;
    context.data.style = context.data.style || style;
    context.data.props = _extends({}, context.data.props, {}, props);
    context.data.attrs = _extends({}, context.data.attrs, {}, attrs);
    context.data.on = _extends({}, context.data.on, {}, on);
    context.data.nativeOn = _extends({}, context.data.nativeOn, {}, nativeOn);
    context.data.domProps = _extends({}, context.data.domProps, {}, domProps);
    context.data.directives = directives.concat(context.data.directives || []);
    context.data.scopedSlots = _extends({}, context.data.scopedSlots, {}, scopedSlots);
    context.data.slot = context.data.slot || slot;
    context.data.key = context.data.key || key;
    context.data.refInFor = context.data.refInFor || refInFor; // 事件 & trigger

    trigger.forEach(function (t) {
      var triggerName = t.name || '';
      var exp = t.value;

      var func = function func() {
        if (context.injections.ViewGroup) {
          context.injections.ViewGroup.EXEC(exp, viewKey);
        }
      }; // @ => nativeOn
      // on


      if (triggerName.includes('@')) {
        var tn = triggerName.replace('@', '');
        var nf = context.data.nativeOn[tn];
        context.data.nativeOn[tn] = nf || func;
      } else if (triggerName) {
        var _nf = context.data.on[triggerName];
        context.data.on[triggerName] = _nf || func;
      }
    });
    return h(viewType, context.data, context.children);
  }
});
// CONCATENATED MODULE: ./es/index.js







var version = '0.0.1';

function es_install(Vue) {
  var components = [es_button, es_icon, es_info, es_loading, locale, view];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  es_install(window.Vue);
}


/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: es_install,
  version: version
});

/***/ })
/******/ ]);
});