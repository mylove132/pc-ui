import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import userLocalStorage from '@/hooks/useLocalstorage';
import { IUserInfo } from '@/typings/data';

export interface IUserState {
    userInfo: IUserInfo; // 登录用户信息
    isLogin: boolean; // 用户是否登录
  }
@Module({ dynamic: true, store, name: 'user', namespaced: true })
class UserStore extends VuexModule  implements IUserState {
    
    userInfo: IUserInfo = {
        name: '',
        token: '',
        id: 0
    };
    isLogin: boolean = false;

    @Mutation
    SET_USER(payload: IUserState): void {
       this.isLogin = payload.isLogin;
       this.userInfo = payload.userInfo;
       // 将authorization存储到localstorage
       const { delLocalStorage, setLocalStorage } = userLocalStorage();
       if (!payload.isLogin) {
        delLocalStorage('Authorization');
       } else {
        setLocalStorage('Authorization', payload.userInfo.token);
       }
   }

   

    @Action
    public dispatchSetUser(payload: IUserState) {
      this.SET_USER(payload);
    }

}

export const userModule = getModule(UserStore)