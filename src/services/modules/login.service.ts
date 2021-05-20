import { login } from "@/api/user";
import { ILoginVO } from "@/domain/login.domain";
import { IUserInfo } from "@/typings/data";
import BaseService from '../base.service';
import { Response } from '../types/index';

/**
 * 登录服务
 */
class LoginService extends BaseService {

    /**
     * 登录接口
     * @param loginVO 
     * @returns 
     */
     login(loginVO: ILoginVO): Promise<Response<IUserInfo>>{
         return this.post<ILoginVO, Response<IUserInfo>>(login, loginVO);
    };

}

let instance;
export default (() => {
    if (instance) return instance;
    instance = new LoginService();
    return instance;
})();