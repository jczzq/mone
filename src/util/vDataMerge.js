/**
 * 合并 injectModel 到 VNode Data对象
 * https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1
 */
const props = [
    'class',
    'style',
    'attrs',
    'props',
    'domProps',
    'on',
    'nativeOn',
    'directives',
    'scopedSlots',
    'slot',
    'key',
    'refInFor'
];

// 合并 VNode Data 属性
// forcedToReplace: 强制替换
export default (data = {}, inject = {}, forcedToReplace = true) => {
    // 除了directives意外其他属性直接assign
    Object.keys(inject).forEach(key => {
        if (key === 'directives' && data.directives) {
            data[key] = data[key].concat(inject[key]);
        } else if (props.includes(key)) {
            // 属性值全部替换
            // 只替换原始值已存在的属性
            if (forcedToReplace) {
                data[key] = Object.assign(data[key] || {}, inject[key]);
            } else {
                Object.keys(data[key]).forEach(k => {
                    if (!data[key][k]) {
                        data[key][k] = inject[key][k];
                    }
                });
            }
        }
    });
};
