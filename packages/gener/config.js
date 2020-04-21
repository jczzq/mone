import Vue from "vue";

export const NATIVE_TAGS = ["p", "div"];

export const VIEW_TYPE = {
  ROW: "ElRow",
  COL: "ElCol",
  TEXT: "nio-text",
  TABLE: "nio-table",
  FORM: "nio-form",
  BUTTON: "nio-button",
  LINE_CHART: "VeLine",
  HISTOGRAM_CHART: "VeHistogram",
  PIE_CHART: "VePie",
  BAR_CHART: "VeBar",
  RING_CHART: "VeRing",
  WATERFALL_CHART: "VeWaterfall",
  FUNNEL_CHART: "VeFunnel",
  RADAR_CHART: "VeRadar",
  MAP_CHART: "VeMap",
  SANKEY_CHART: "VeSankey",
  HEATMAP_CHART: "VeHeatmap",
  SCATTER_CHART: "VeScatter",
  CANDLE_CHART: "VeCandle",
  GAUGE_CHART: "VeGauge",
  TREE_CHART: "VeTree",
  LIQUIDFILL_CHART: "VeLiquidfill",
  WORDCLOUD_CHART: "VeWordcloud"
};

export const VIEW_TYPES = [
  {
    label: "栅格容器",
    icon: "el-icon-tickets",
    value: VIEW_TYPE.ROW,
    slotTypes: ["default"],
    triggerTypes: ["@click"],
    virtualProps: {},
    viewCategory: "布局"
  },
  {
    label: "栅格",
    icon: "el-icon-tickets",
    value: VIEW_TYPE.COL,
    slotTypes: ["default"],
    triggerTypes: ["@click"],
    virtualProps: {},
    viewCategory: "布局"
  },
  {
    label: "文本",
    icon: "el-icon-tickets",
    value: VIEW_TYPE.TEXT,
    realComponent: "p",
    slotTypes: ["default"],
    triggerTypes: ["@click"],
    virtualProps: {
      label: {
        type: String
      }
    },
    viewCategory: "通用"
  },
  {
    label: "表单",
    icon: "el-icon-document",
    value: VIEW_TYPE.FORM,
    realComponent: "ElForm",
    slotTypes: ["default"],
    triggerTypes: ["validate"],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "通用"
  },
  {
    label: "按钮",
    icon: "el-icon-thumb",
    value: VIEW_TYPE.BUTTON,
    realComponent: "ElButton",
    slotTypes: ["default"],
    triggerTypes: ["click"],
    virtualProps: {
      label: {
        type: String
      }
    },
    viewCategory: "通用"
  },
  {
    label: "表格",
    icon: "el-icon-s-grid",
    value: VIEW_TYPE.TABLE,
    realComponent: "ElTable",
    slotTypes: ["action"],
    scopedSlotTypes: ["action"],
    triggerTypes: [
      "select",
      "select-all",
      "selection-change",
      "cell-mouse",
      "cell-click",
      "cell-dblclick",
      "row-click",
      "row-contextmenu",
      "row-dblclick",
      "header-click",
      "header-contextmenu",
      "sort-change"
    ],
    virtualProps: {
      hideKeys: {
        type: Array
      },
      showPageInfo: {
        type: Boolean
      },
      pageInfo: {
        type: Object
      },
      fields: {
        type: Array
      },
      showSelection: {
        type: Boolean
      },
      showIndex: {
        type: Boolean
      },
      showAction: {
        type: Boolean
      }
    },
    viewCategory: "通用"
  },
  {
    label: "折线图",
    icon: "el-icon-data-line",
    value: VIEW_TYPE.LINE_CHART,
    realComponent: VIEW_TYPE.LINE_CHART,
    slotTypes: [],
    triggerTypes: [],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "图表"
  },
  {
    label: "柱状图",
    icon: "el-icon-s-data",
    value: VIEW_TYPE.HISTOGRAM_CHART,
    realComponent: VIEW_TYPE.HISTOGRAM_CHART,
    slotTypes: [],
    triggerTypes: [],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "图表"
  },
  {
    label: "饼状图",
    icon: "el-icon-pie-chart",
    value: VIEW_TYPE.PIE_CHART,
    realComponent: VIEW_TYPE.PIE_CHART,
    slotTypes: [],
    triggerTypes: [],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "图表"
  },
  {
    label: "条形图",
    icon: "el-icon-s-unfold",
    value: VIEW_TYPE.BAR_CHART,
    realComponent: VIEW_TYPE.BAR_CHART,
    slotTypes: [],
    triggerTypes: [],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "图表"
  },
  {
    label: "环形图",
    icon: "el-icon-s-help",
    value: VIEW_TYPE.RING_CHART,
    realComponent: VIEW_TYPE.RING_CHART,
    slotTypes: [],
    triggerTypes: [],
    virtualProps: {
      fields: {
        type: Array
      }
    },
    viewCategory: "图表"
  }
  // {
  //   label: "瀑布图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.WATERFALL_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "漏斗图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.FUNNEL_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "雷达图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.RADAR_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "地图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.MAP_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "桑基图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.SANKEY_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "热力图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.HEATMAP_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "散点图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.SCATTER_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "K线图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.CANDLE_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "仪表盘",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.GAUGE_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "树图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.TREE_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "水球图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.LIQUIDFILL_CHART,
  //   slotTypes: []
  // },
  // {
  //   label: "词云图",
  //   icon: "el-icon-s-help",
  //   value: VIEW_TYPE.WORDCLOUD_CHART,
  //   slotTypes: []
  // }
];

const viewTypeMap = {};
for (const VT of VIEW_TYPES) {
  viewTypeMap[VT.value] = VT;
}

export const VIEW_TYPE_MAP = viewTypeMap;

/**
 * 获取全局组件配置对象
 * @param {*} key viewType
 * realComponent 函数组件对应的实际组件
 */
export const GET_VUE_COMPONENT_PROPS = name => {
  const vt = VIEW_TYPE_MAP[name] || {};
  name = vt.realComponent || name;
  const componentProps = ((Vue.options.components[name] || {}).options || {}).props || {};
  return { ...vt.virtualProps, ...componentProps };
};

// 字段类型
export const FIELD_TYPE = {
  INT: "int",
  STRING: "string",
  DATE: "date",
  DATETIME: "datetime"
};
export const FIELD_TYPES = [FIELD_TYPE.INT, FIELD_TYPE.STRING, FIELD_TYPE.DATE, FIELD_TYPE.DATETIME];
