import { JmeterScriptPojo, UploadJmeterScriptPojo } from '@/domain/jmeter-script.domain';
import BaseService from '../base.service';
import { Response } from '../types/index';
import { addJmeterScript, queryJmeterScript, uploadJmeterScript } from '@/api/script';

/**
 * jmeter脚本服务
 */
class JmeterScriptService extends BaseService {

    /**
     * 查询jmeter脚本
     * @param scriptId 
     * @returns 
     */
    queryJmeterScriptByIdService(jmeterScriptId: number): Promise<Response<JmeterScriptPojo>> {
        return this.get<{}, Response<JmeterScriptPojo>>(
            queryJmeterScript + jmeterScriptId,{}
        );
    };

    /**
     * jmeter脚本文件上传
     * @param params 
     * @param headers 
     * @returns 
     */
    jmxFileUploadService(params: FormData, headers: {}): Promise<Response<UploadJmeterScriptPojo>> {
        return this.postForHeaders<FormData, Response<UploadJmeterScriptPojo>>(uploadJmeterScript, params, headers);
    }

    /**
     * 保存jmeter脚本
     * @param script 
     * @returns 
     */
    saveJmeterScriptService(script: JmeterScriptPojo): Promise<Response<boolean>>{
        return this.post<JmeterScriptPojo, Response<boolean>>(
            addJmeterScript, script
        )
    };

}

let instance;
export default (() => {
    if (instance) return instance;
    instance = new JmeterScriptService();
    return instance;
})();