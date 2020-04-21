import axios from 'axios';

export default ({
    beforeSend,
    afterSend,
    beforeSendError,
    afterSendError,
    // 在数据传送到`then/catch`方法之前对数据进行改动
    transformResponse = [],
    baseUrl,
    url,
    method = 'GET'
} = {}) => {
    const defaultAxios = axios.create({
        baseURL: baseUrl
    });

    // 请求拦截器
    defaultAxios.interceptors.request.use(
        config => {
            beforeSend && beforeSend(config);
            return config;
        },
        err => {
            beforeSendError && beforeSendError(err);
            return Promise.reject(err);
        }
    );
    // 响应拦截器
    defaultAxios.interceptors.response.use(
        res => {
            if (afterSend) {
                return afterSend(res.data);
            } else if (/0+$/.test(res.data.code)) {
                return res.data;
            } else {
                console.error('Result Error: ', res);
                return Promise.reject(res);
            }
        },
        err => {
            afterSendError && afterSendError(err);
            return Promise.reject(err);
        }
    );
    return (url2 = url, data, method2 = method, config = {}) => {
        config.url = config.url || url2;
        config.method = config.method || method2;
        config.transformResponse = config.transformResponse || transformResponse;

        if (config.method.toUpperCase() === 'GET') {
            config.params = config.params || data;
        } else {
            config.data = config.data || data;
        }
        return defaultAxios.request(config);
    };
};
