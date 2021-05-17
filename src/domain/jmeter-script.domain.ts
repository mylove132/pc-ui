/**
 * jmeter脚本接口数据
 */
interface JmeterScriptPojo {
    scriptId?: number;
    scriptName: string;
    threadNum: number;
    stressTime: number;
    fileMd5: string;
    status?: boolean;
}

/**
 * 上传jmeter脚本接口数据
 */
interface UploadJmeterScriptPojo {
    name: string;
    md5: string;
}

export {
    JmeterScriptPojo,
    UploadJmeterScriptPojo
}