import { Component } from "vue";
import { Router } from "vue-router";

export interface IUnknowObject {
  [key: string]: any;
}
declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string; // for named routes (命名路由)
  components?: { [name: string]: Component }; // for named views (命名视图组件)
  redirect?: string | Location | Function;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>; // for nested routes (嵌套路由)
  beforeEnter?: (to: Router, from: Router, next: Function) => void;
  meta?: any;
}