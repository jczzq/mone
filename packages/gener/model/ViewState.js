var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const CONFIG = {
  query: {
    pageName: "offset",
    sizeName: "limit"
  }
};
/**
 * 视图模型
 */
export class CommonView {
  constructor(data = {}) {
    this.loading = data.loading;
    this.pending = data.pending;
    this.resolved = true;
    this.visible = data.visible;
  }
}
// 列表视图
export class ListView extends CommonView {
  constructor(data) {
    super(data);
    this.needPage = true;
    this.rows = [];
    this.total = 0;
    this.rowsName = "data.rows";
    this.totalName = "data.total";
    if (data) {
      Object.assign(this, data);
      this.initParameters(data.parameters);
    } else {
      this.initParameters();
    }
  }
  initParameters(data) {
    if (data) {
      this._parameters = JSON.parse(JSON.stringify(data));
    }
    this.parameters = {
      query: {
        [CONFIG.query.pageName]: 1,
        [CONFIG.query.sizeName]: 20
      },
      sort: {}
    };
    if (this._parameters) {
      this.parameters.query = this._parameters.query || {};
      this.parameters.sort = this._parameters.sort || {};
    }
  }
  load() {
    return __awaiter(this, arguments, void 0, function*() {
      try {
        const args = Array.from(arguments);
        var req = args.shift();
        this.loading = true;
        const res = yield req.apply(req, args);
        this.rows = getDeepProp(res, this.rowsName.split("."));
        this.total = getDeepProp(res, this.totalName.split("."));
        return Promise.resolve(res);
      } catch (error) {
        this.rows = [];
        this.total = 0;
        return Promise.reject(error);
      } finally {
        this.loading = false;
      }
    });
  }
}
// 详情视图
export class DetailView extends CommonView {
  constructor(data) {
    super(data);
    this.instance = {};
    this.deleting = false;
    this.instanceName = "data";
    if (data) {
      Object.assign(this, data);
    }
  }
  clone() {
    return JSON.parse(JSON.stringify(this.instance));
  }
  delete() {
    return __awaiter(this, arguments, void 0, function*() {
      try {
        const args = Array.from(arguments);
        var req = args.shift();
        this.deleting = true;
        const res = yield req.apply(req, args);
        return Promise.resolve(res);
      } catch (error) {
        console.info("DetailView delete data error", error);
        return Promise.reject(error);
      } finally {
        this.deleting = false;
      }
    });
  }
  load() {
    return __awaiter(this, arguments, void 0, function*() {
      try {
        const args = Array.from(arguments);
        var req = args.shift();
        this.loading = true;
        const res = yield req.apply(req, args);
        this.instance = res[this.instanceName];
        return Promise.resolve(res);
      } catch (error) {
        console.info("DetailView load data error", error);
        return Promise.reject(error);
      } finally {
        this.loading = false;
      }
    });
  }
}
// 表单视图
export class FormView extends DetailView {
  constructor(data) {
    super(data);
    this.rules = {};
    this.editing = false;
    this.submitting = false;
    if (data) {
      Object.assign(this, data);
    }
  }
  submit() {
    const args = Array.from(arguments);
    var req = args.shift();
    return new Promise((resolve, reject) => {
      this.submitting = true;
      req
        .apply(req, args)
        .then(res => {
          this.submitting = false;
          resolve(res);
        })
        .catch(err => {
          this.submitting = false;
          reject(err);
        });
    });
  }
}

const getDeepProp = (a, props) => {
  try {
    if (props.length) {
      let p = props.shift();
      return a[p] ? getDeepProp(a[p], props) : a[p];
    } else {
      return a;
    }
  } catch (error) {
    return a;
  }
};
