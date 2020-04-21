export default {
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
    monthTitle: (year: number, month: number) => `${year}年${month}月`
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
    discount: (discount: number) => `${discount}折`,
    condition: (condition: number) => `满${condition}元可用`
  },
  moneCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: (count: number) => `${count}张可用`
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
};
