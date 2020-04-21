export default {
    functional: true,
    name: 'nio-checkbox',
    render(h, context) {
        let { options = [] } = context.data.attrs || {};

        delete context.data.attrs.options;

        options = Array.isArray(options) ? options : [];
        const children = options.map(x => {
            x = typeof x === 'string' ? { label: x, value: x } : x;
            return h(
                'el-checkbox',
                {
                    attrs: {
                        label: x.value
                    }
                },
                x.label
            );
        });
        return h('el-checkbox-group', context.data, children);
    }
};
