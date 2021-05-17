import BaseService from '../base.service';
import { Response } from '../types/index';
import { queryUIScriptList, runUIScript } from '@/api/script';
import { ICode } from '@/typings/index';

/**
 * UI脚本服务
 */
class UIScriptService extends BaseService {

    /**
     * 查询UI脚本列表
     * @returns 
     */
    queryUIScriptListService(): Promise<Response<ICode[]>> {
        return this.get<{}, Response<ICode[]>>(
            queryUIScriptList,{}
        );
    };

    /**
     * 查询UI脚本列表
     * @returns 
     */
     runUIScriptService(lang: string, code: String): Promise<Response<string>> {
        return this.post<{}, Response<string>>(
            runUIScript,{"lang": lang, "code": code}
        );
    };
}

let instance;
export default (() => {
    if (instance) return instance;
    instance = new UIScriptService();
    return instance;
})();