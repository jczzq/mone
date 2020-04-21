import Field from './src/main';

Field.install = function(Vue) {
    if (Field.installed) return;
    Vue.component(Field.name, Field);
    Field.installed = true;
};

// 默认表单类型
export const FIELD_COMP = {
    string: 'el-input', // 文本输入框
    textarea: 'el-input?type=textarea', // 密码输入框
    password: 'el-input?type=password', // 密码输入框
    int: 'el-input-number?controlsPosition=right', // 数字框
    option: 'nio-option', // 下拉选框
    options: 'nio-option?multiple=true', // 下拉选框
    boolean: 'el-switch', // 开关
    radio: 'nio-radio', // 单选框
    checkbox: 'nio-checkbox', // 多选框
    date: 'el-date-picker', // 日期选择框
    daterange: 'el-date-picker?type=daterange', // 日期段选择框
    datetime: 'el-date-picker?type=datetime', // 日期选择框
    datetimerange: 'el-date-picker?type=datetimerange', // 日期时间段选择框
    time: 'el-time-picker' // 时间选择框
};

export default Field;
