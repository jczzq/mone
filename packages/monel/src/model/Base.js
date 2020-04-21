export default class Base {
  constructor() {}
  // 装箱（data参数支持数组进行批量装箱）
  static inbox(data) {
    let _this = this;
    if (!data || _this === Base) {
      return data;
    }
    if (Array.isArray(data)) {
      return data.map(x => _this.inbox(x));
    } else {
      return new _this(data);
    }
  }
}
