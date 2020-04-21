export default {
    functional: true,
    name: 'nio-table',
    render(h, context) {
        let { hideKeys = [], pageInfo = {}, fields = [] } = context.data.attrs || {};

        const dataclass = context.data.class;
        const datastyle = context.data.style;

        delete context.data.class;
        delete context.data.style;
        delete context.data.attrs.hideKeys;
        delete context.data.attrs.showPageInfo;
        delete context.data.attrs.pageInfo;
        delete context.data.attrs.fields;
        delete context.data.attrs.showSelection;
        delete context.data.attrs.showIndex;
        delete context.data.attrs.showAction;
        delete context.scopedSlots.default;

        const columns = fields
            .filter(x => !hideKeys.includes(x.fieldKey))
            .map(x => {
                const formatter =
          x.attrs && x.attrs.options
              ? (row, column, cellValue) => (x.attrs.options.find(o => o.value === cellValue) || {}).label
              : undefined;
                return h('el-table-column', {
                    props: {
                        prop: x.fieldKey,
                        label: x.caption,
                        formatter,
                        ...x.attrs
                    },
                    scopedSlots: x.scopedSlots
                });
            });
        if (context.props.showSelection) {
            columns.unshift(
                h('el-table-column', {
                    props: {
                        type: 'selection',
                        reserveSelection: true,
                        align: 'center'
                    }
                })
            );
        }
        if (context.props.showIndex) {
            columns.unshift(
                h('el-table-column', {
                    props: {
                        type: 'index',
                        align: 'center'
                    }
                })
            );
        }
        if (context.props.showAction) {
            let actionScopeSlot;
            if (context.scopedSlots.action) {
                actionScopeSlot = {
                    default: p => context.scopedSlots.action(p)
                };
            }
            columns.push(
                h('el-table-column', {
                    scopedSlots: actionScopeSlot,
                    props: typeof context.props.showAction === 'object' ? context.props.showAction : { label: '操作' }
                })
            );
        }
        const result = [h('el-table', context.data, columns)];
        if (context.props.showPageInfo) {
            result.push(
                h('el-pagination', {
                    style: 'padding: 11px 2px; height: 50px; overflow: hidden;',
                    props: pageInfo,
                    on: {
                        'current-change': val => {
                            pageInfo.currentPage = val;
                        },
                        'size-change': val => {
                            pageInfo.pageSize = val;
                        }
                    }
                })
            );
        }

        return h(
            'div',
            {
                class: dataclass,
                style: datastyle
            },
            result
        );
    }
};
