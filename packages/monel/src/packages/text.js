export default {
    name: 'nio-text',
    functional: true,
    render(h, context) {
        const { label } = context.data.attrs;

        delete context.data.attrs.label;

        const children = context.children || [];
        children.unshift(label);

        return h('p', context.data, children);
    }
};
