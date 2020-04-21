/**
 * IOCWebPage
 */
import IOCWebView from './IOCWebView';
import { viewList2Tree, viewTree2List } from '../util/IOCWebPage';

export default class IOCWebPage {
    constructor(data = {}) {
        this._id = data._id;
        this.appId = data.appId;
        this.pageKey = data.pageKey || data._id;
        this.title = data.title;
        this.createdTrigger = data.createdTrigger;
        this.mountedTrigger = data.mountedTrigger;
        this.class = data.class;
        this.style = data.style;
        this.gutter = data.gutter;
        this.views = IOCWebView.inbox(data.views) || [];
        // 当前页面所有出现的视图总数，自增ID
        this.viewNo = Math.max.apply(Math, [
            ...this.views.map(x => x.viewKey),
            this.views.length
        ]);
        this.dict = data.dict || [];

        // 视图数组转换为树结构
        this.views = viewList2Tree(this.views);
    }
    createView(option = {}) {
        if (!option.viewType) {
            console.warn('The `viewType` property is not found in the object.');
            return;
        }
        this.viewNo++;
        option.viewKey = this.viewNo.toString();
        option.sort = this.viewNo;

        const newView = new IOCWebView(option);
        return newView;
    }
    // 添加新视图
    addView(option = {}) {
        const newView = this.createView(option);
        this.views.push(newView);
        return newView;
    }
    // 升序排序
    sortViews() {
        this.views.sort((a, b) => {
            return (a.sort || 0) - (b.sort || 0);
        });
    }
    static Rules = {
        appId: [{ required: true, message: '请选择所属系统' }],
        title: [{ required: true, message: '请输入标题' }]
    };
    // 处理IOCWebPage对象 为 接口参数
    format() {
        const tmp = JSON.parse(JSON.stringify({ ...this }));
        tmp.views = viewTree2List(tmp.views);
        for (const view of tmp.views) {
            // 序列化
            view.attrs = view.attrs ? JSON.stringify(view.attrs) : void 0;
        }
        return tmp;
    }
    // 清除标识
    clearID() {
        delete this.appId;
        delete this.pageKey;
    }
    set(prop, val) {
        if (prop) {
            this[prop] = val;
        }
    }
}
