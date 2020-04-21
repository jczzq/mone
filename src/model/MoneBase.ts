/* eslint-disable */

export class MoneBase {
  constructor(data?) {}
  // 装箱（data参数支持数组进行批量装箱）
  static inbox(data?: any) {
    const _this = this;
    if (!data || _this === MoneBase) {
      return data;
    }
    if (Array.isArray(data)) {
      return data.map((x) => _this.inbox(x));
    } else {
      return new _this(data);
    }
  }
}
