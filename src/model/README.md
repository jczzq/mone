# ViewState 视图状态类

### CommonView 通用视图

```ts
class CommonView {
  loading: boolean;
  visible: boolean;
}
new CommonView();
```

### ListView 列表视图

```ts
class ListView extends CommonView {
  needPage: boolean;
  parameters: MoneParameter;
  _parameters: any;
  rows: any[];
  total: number;
  rowsName: string;
  totalName: string;
  constructor(data?);
  initParameters(data?): void;
  sizeChange(size): void;
  async load(): Promise<any>;
}
```

### MoneParameter 提交参数

```ts
class MoneParameter {
  sort?: ParameterSort | ParameterSort[];
  page?: {};
  query: any;
  constructor(data?);
  format?(): void;
}
```
