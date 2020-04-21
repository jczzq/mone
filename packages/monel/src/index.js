import getRequest from './util/request';
import * as utils from './util';
import * as packages from './packages';
import IOCWebPage from './model/IOCWebPage';
import IOCWebView from './model/IOCWebView';

export * from './model/ViewState';
export * from './util/IOCWebPage';
export * from './config';

const { version } = {
    version: '0.0.1',
};

const IOCWeb = {
    install(Vue, opt = {}) {
        if (IOCWeb.installed) return;

        Vue.prototype.$mone = {
            moduleName: opt.moduleName || 'IOCWeb',
            request: getRequest(opt),
        };
        Object.keys(packages).forEach((name) => {
            const component = packages[name];
            if (!component) return;
            if (component.install) {
                Vue.use(component);
            } else {
                Vue.component(component.name, component);
            }
        });

        if (process.env.NODE_ENV !== 'production') {
            console.log(
                `%c ioc-web %c v${version} %c`,
                'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
                'background:#41b883; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
                'background:transparent'
            );
        }
        IOCWeb.installed = true;
    },
};

if (typeof window !== 'undefined' && window.Vue) {
    IOCWeb.install(window.Vue);
}

export { IOCWeb, getRequest, IOCWebPage, IOCWebView, utils };
