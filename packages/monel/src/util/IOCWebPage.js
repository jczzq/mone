/**
 * 视图初始化
 */
import { VIEW_TYPE } from "../config";
// 基础视图类型别名
// const DEFAULT_VIEW_TYPE = viewType => {
//   return VIEW_TYPE[viewType] || viewType;
// };

// attrs 包含 fields 属性的视图类型
// 处理 fields
const INCLUDE_FIELDS_VIEWS = [VIEW_TYPE.FORM, VIEW_TYPE.TABLE];

// 给视图填充插槽
const setSlot = (view, slotViews) => {
  if (view.slots && view.slots.length) {
    for (let i = 0; i < view.slots.length; i++) {
      const viewKey = view.slots[i];
      const slotView = slotViews.find(x => x.viewKey !== view.viewKey && x.viewKey === viewKey);
      if (slotView) {
        setSlot(slotView, slotViews);
        view.slots[i] = slotView;
      } else {
        view.slots[i] = null;
      }
    }
    view.slots = view.slots.filter(x => x);
  }
};

// 视图数组转换为树结构
export const viewList2Tree = views => {
  const rootViews = views.filter(v => !v.slot);
  const slotViews = views.filter(v => v.slot);

  rootViews.forEach(view => {
    // view.slots [String] => [IOCWebView]
    setSlot(view, slotViews);
  });

  return rootViews;
};

// 视图树转换为一维数组
export const viewTree2List = (views, list = []) => {
  for (let i = 0; i < views.length; i++) {
    const view = views[i];
    // 排序
    view.sort = i;
    // 处理slots
    if (Array.isArray(view.slots)) {
      const slots = view.slots;
      view.slots = slots.map(x => x.viewKey);
      viewTree2List(slots, list);
    }
    list.push(view);
  }
  return list;
};

export const initModel = fields => {
  const model = {};
  fields.forEach(f => {
    let initVal;
    if (f.hasOwnProperty("defaultValue")) {
      initVal = f.defaultValue;
    } else {
      switch (f.fieldType) {
        case "string":
        case "textarea":
          initVal = "";
          break;
        case "int":
          initVal = 0;
          break;
        case "boolean":
          initVal = false;
          break;
        case "checkbox":
        case "options":
        case "daterange":
        case "datetimerange":
          initVal = [];
          break;
        default:
          initVal = null;
          break;
      }
    }
    model[f.fieldKey] = initVal;
  });
  return model;
};

// 视图默认数据
export const getDefaultViewData = view => {
  let viewData;
  switch (view.viewType) {
    case VIEW_TYPE.FORM:
      viewData = initModel(view.attrs.fields);
      break;
    case VIEW_TYPE.TABLE:
      var { data = [], total = 0 } = view.attrs.data || {};
      viewData = {
        data,
        total
      };
      break;
    /* eslint-disable no-fallthrough */
    // 折线图
    case VIEW_TYPE.LINE_CHART:
    // 柱状图
    case VIEW_TYPE.HISTOGRAM_CHART:
    // 饼状图
    case VIEW_TYPE.PIE_CHART:
    // 条形图
    case VIEW_TYPE.BAR_CHART:
    // 环形图
    case VIEW_TYPE.RING_CHART:
      var { columns, rows } = view.attrs.data || {};
      viewData = {
        columns: columns || [],
        rows: rows || []
      };
      break;
  }
  return viewData;
};

// 设置视图数据属性
export const setPropsData = x => {
  switch (x.viewType) {
    case VIEW_TYPE.FORM:
      x.attrs.model = x.data;
      break;
    case VIEW_TYPE.TABLE:
      if (x.data) {
        x.attrs.data = x.data.data ? x.data.data : x.data;
        if (typeof x.attrs.pageInfo === "object") {
          x.attrs.pageInfo.total = x.data.total || 0;
        }
      }
      break;
    // 折线图
    case VIEW_TYPE.LINE_CHART:
    // 柱状图
    case VIEW_TYPE.HISTOGRAM_CHART:
    // 饼状图
    case VIEW_TYPE.PIE_CHART:
    // 条形图
    case VIEW_TYPE.BAR_CHART:
    // 环形图
    case VIEW_TYPE.RING_CHART:
      if (Array.isArray(x.data)) {
        const row = x.data[1];
        if (row) {
          x.attrs.data = {
            columns: Object.keys(row),
            rows: x.data
          };
        }
      }
      break;
  }
};

export const initIOCWebPage = (data = {}) => {
  data.viewMap = {};
  data.viewKeys = [];
  data.views = data.views || [];
  data.dict = data.dict || {};
  data.views.forEach(x => {
    // JSON.parse
    try {
      x.attrs = x.attrs ? JSON.parse(x.attrs) : {};
    } catch (error) {
      console.error("Error in `initIOCWebPage` function: attrs", error.message);
      x.attrs = {};
    }
    // 处理字典
    if (INCLUDE_FIELDS_VIEWS.includes(x.viewType)) {
      if (!x.attrs.fields) x.attrs.fields = [];
      x.attrs.fields.forEach(f => {
        if (f.attrs && typeof f.attrs.options === "string") {
          f.attrs.options = data.dict[f.attrs.options] || [];
        }
      });
    }

    // 初始化视图默认数据
    x.data = x.data || getDefaultViewData(x);
    // 设置数据到各组件
    setPropsData(x);

    // 修剪属性

    // 数据结构冗余
    data.viewKeys.push(x.viewKey);
    data.viewMap[x.viewKey] = x;
  });

  // 处理 slots
  data.views = viewList2Tree(data.views);

  return data;
};
