export interface Config {
  silent?: boolean;
  rowsName?: string;
  totalName?: string;
  page?: {
    pageName: string;
    sizeName: string;
  };
  warnHandler?: Function;
  parameterFormat?: Function;
}

export default {
  silent: true,
  rowsName: 'data.rows',
  totalName: 'data.total',
  page: {
    pageName: 'currentPage',
    sizeName: 'pageSize',
  }
} as Config;
