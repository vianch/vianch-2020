import { AxiosInstance, Method } from "axios";
import { get, isNil, merge, omitBy } from "lodash";
import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

import { httpCodes } from "../../config/constants";
import { api as defaultApi } from "../../src/api/api";
import {
  requestError,
  requestStart,
  requestSuccess,
} from "./httpRequest.actions";

interface MetaActions {
  api?: AxiosInstance; // Axios instance;
  body?: object | null | undefined; // The payload sent to the API.
  headers?: object; // Additional headers for the request
  method?: Method; // HTTP method for the API call.
  onError?: (error: any) => any; // Callback for failed requests.
  onSuccess?: (response: any) => any; // Callback for successful requests.
  query?: string | { [key: string]: string } | undefined; // Query parameters for the request.
  type?: string; // An action type to identify the request.
  url: string; // The API endpoint we want to call.
}

interface MetaAction extends AnyAction {
  meta: MetaActions;
}

const httpRequest: Middleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>,
) => async (action: MetaAction) => {
  const { meta } = action;
  const {
    api = defaultApi,
    body = null,
    headers,
    method,
    onError,
    onSuccess,
    query,
    type = "",
    url,
  } = meta;

  if (!url || !method) {
    next(action);
    return;
  }

  if (type) {
    dispatch(
      requestStart(type, {
        body,
        headers,
        method,
        query,
        url,
      }),
    );
  }

  const params = omitBy(query, value => isNil(value));

  try {
    const { data } = await api({
      data: body,
      headers: merge({}, api.defaults.headers, headers),
      method,
      params,
      url,
    });

    dispatch(requestSuccess(type, "Request completed"));

    if (onSuccess) {
      onSuccess(data);
    }
  } catch ({ response }) {
    if (!response) {
      return;
    }

    const error = get(response, "data.message", null);
    const status = get(response, "status", httpCodes.SERVER_ERROR);

    dispatch(requestError(type, error, status));

    if (onError) {
      onError(response.data);
    }
  }
};

export { MetaActions, httpRequest };
