export class ViewModel {
  loading: boolean;
  visible: boolean;
}
export class ListView extends ViewModel {
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
  load(): Promise<any>;
}

interface ParameterSort {
  prop: string;
  order: 'asc' | 'desc' | null;
}
interface ParameterPage {
  currentPage: number;
  pageSize: number;
}
export class MoneParameter {
  sort?: ParameterSort;
  page?: ParameterPage;
  query?: any;
  format?: Function;
  constructor({ query, sort, page, format }: MoneParameter);
}
