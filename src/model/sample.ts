import { MoneParameter } from './ViewState';

const aa = new MoneParameter({
  page: {
    currentPage: 1,
    pageSize: 20
  },
  query: {
    value: [123],
    format: ''
  },
  format() {
    return {};
  }
});
console.log(aa);
