
import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig, Method} from "axios"
import { ElLoading } from 'element-plus';
import { nextTick } from "vue";

axios.defaults.timeout = 60000 ; // 设置全局请求超时时间
axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL // 设置全局请求基地址
//定于loading服务
let loadingService: any;
// 定义接口
interface PendingType {
    url: string | undefined;
    method: Method | undefined;
    params: object;
    data: object;
    cancel: Function;
}

// 取消重复请求
const pending: Array<PendingType> = [];

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
};

export default class BaseService {
    private spinningAxios = axios.create(); // 建立请求时会产生全局Loading的axios实例
    private noSpinningAxios = axios.create(); // 建立请求时不会产生全局Loading的axios实例
 
    constructor() {
        this.addInterceptors(this.spinningAxios,true);
        this.addInterceptors(this.noSpinningAxios,false);
    }
 
    private addInterceptors(requestMain: AxiosInstance, loading: boolean): void {
        requestMain.interceptors.request.use(options => {
            // 对全局请求的options进行更改，例如增加动态头部信息等
            if(loading)
            {
                loadingService = ElLoading.service({fullscreen: true,spinner: 'el-icon-loading', background: 'rgba(53, 54, 58, 0.7)'});
                removePending(options);
            }
            return options;
        },error => {
            // 错误捕捉 此时的错误为最外层status的错误
            return BaseService.outError(error,loading)
        })
        requestMain.interceptors.response.use(response => {
            // 处理全局请求的返回response，例如对返回值进行判断
            removePending(response.config);
            return BaseService.disposeResponse(response,loading)
        },error => {
            // 错误捕捉 此时的错误为最外层status的错误
            return BaseService.outError(error,loading)
        })
    }
 
    private static outError(error: any, loading: boolean): Promise<string> {
        if(loading)
        {
            nextTick(()=>{
                loadingService.close();
            })
            
        }
        const { response = {} } = error;
        return Promise.reject(response.statusText || (error && error.toString()) || "未知错误");
    }
 
    private static disposeResponse(response: AxiosResponse, loading: boolean): AxiosResponse | Promise<any> {
        if(loading)
        {
            nextTick(()=>{
                loadingService.close();
            })
        }
        // 对接口返回的数据进行判断，例如接口中 code 的值 200为成功，500为失败，401为未登录时进行各个操作，此处可以使用枚举
        const { data } = response;
        switch (data.code) {
             case 50000:
                return Promise.reject(data.msg);
             case 50001:
                return Promise.reject(data.msg);
            case 50002:
                return Promise.reject(data.msg); 
            default: return response; //示例数据，请自行剔除
        }
    }
 
    public async post<T,S>(url: string, data: T): Promise<S> {
        return this.spinningAxios.post(url,data,{
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }

    public async postForHeaders<T,S>(url: string, data: T, headers: {}): Promise<S> {
        return this.spinningAxios.post(url,data, headers).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async get<T,S>(url: string, data: T): Promise<S> {
        return this.spinningAxios.get(url,{
            params: data,
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async postNoLoading<T,S>(url: string, data: T): Promise<S | string> {
        return this.noSpinningAxios.post(url,data,{
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async getNoLoading<T,S>(url: string, data: T): Promise<S | string> {
        return this.noSpinningAxios.get(url,{
            params: data,
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
}
 