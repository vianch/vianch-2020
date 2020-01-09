declare module "CustomRedux" {
  import { Action } from "redux";

  export interface DispatchAction extends Action {
    [key: string]: any;
  }
}
