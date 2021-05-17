export interface IUnknowObject {
  [key: string]: any;
}


// 代码
export interface ICode extends IUnknowObject {
  id?: number;
  name: string;
  code: string;
  lang: string;
  theme: string;
  desc?: string;
}