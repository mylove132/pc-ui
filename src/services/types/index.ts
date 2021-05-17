/**
 * 请求数据类型通用返回bean
 */
 export interface Response<T> {
    code: number,
    msg: string,
    data?: T
}