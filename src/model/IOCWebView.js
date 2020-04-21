/**
 * IOCWebView
 */
import Base from './Base';
import { VIEW_TYPE_MAP } from '../config';

export default class IOCWebView extends Base {
    constructor(data = {}) {
        super();
        // IOCWebView 原生属性
        this.viewKey = data.viewKey;
        this.viewType = data.viewType;
        const VT = VIEW_TYPE_MAP[data.viewType] || {};
        this.title = data.title || `${data.viewKey}-${VT.label}` || '未命名';
        this.sort = data.sort;
        this.layout = data.layout || {
            span: 24,
            offset: 0,
            push: 0,
            pull: 0
        };
        this.slots = data.slots || [];

        this.trigger = data.trigger || [];
        if (VT.triggerTypes) {
            for (const trigger of VT.triggerTypes) {
                const t = this.trigger.find(x => x.name === trigger);
                if (!t) {
                    this.trigger.push({
                        name: trigger,
                        value: null
                    });
                }
            }
        }

        // 集成的 VNode Data 属性
        this.class = data.class; // String
        this.style = data.style; // String
        this.on = data.on; // Object
        this.domProps = data.domProps; // Object
        this.nativeOn = data.nativeOn; // Object
        this.directives = data.directives;
        this.scopedSlots = data.scopedSlots;
        this.slot = data.slot;
        this.key = data.key;
        this.refInFor = data.refInFor;
        try {
            data.attrs = data.attrs || data.props;
            this.attrs = typeof data.attrs === 'string' ? JSON.parse(data.attrs) : data.attrs || {};
        } catch (error) {
            console.log(error);
            this.attrs = {};
        }

        this._activeName = 'layout';
    }

    set(prop, val) {
        if (prop) {
            this[prop] = val;
        }
    }
}
