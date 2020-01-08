import { MetaActions } from "./httpRequest";
import { httpRequestTypes } from "./httpRequest.types";

export const requestStart = (requestId: string, params: MetaActions) => ({
  payload: {
    requestId,
    ...params,
  },
  type: httpRequestTypes.CORE_HTTP_REQUEST,
});

export const requestSuccess = (requestId: string, message?: string) => ({
  payload: {
    message,
    requestId,
  },
  type: httpRequestTypes.CORE_HTTP_SUCCESS,
});

export const requestError = (requestId: string, message: string, status: number) => ({
  payload: {
    message,
    requestId,
    status,
  },
  type: httpRequestTypes.CORE_HTTP_ERROR,
});
