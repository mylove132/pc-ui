import { IUnknowObject } from ".";

// 代码
export interface ICode extends IUnknowObject {
    id?: number;
    name: string;
    code: string;
    lang: string;
    theme: string;
    desc?: string;
  }

  /**
   * 用户信息
   */
export interface IUserInfo extends IUnknowObject {
    name: string;
    id: number;
    token: string;
}