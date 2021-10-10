import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from "axios";
import conf from "./config";
import { _ResponseError, _ResponseData, ECONNABORTED } from "../types/axios";
import { paramsMd5, signature, getRandStr, getRandNumber } from "./signature";

export const source: CancelTokenSource = axios.CancelToken.source();

const handleRequest = async (request: AxiosRequestConfig) => {
  const token: string = await Promise.resolve(
    "bc4e7487e8a5e6e6fbfc606c8a782aa2"
  );
  request.headers.token = token;
  const char = getRandStr(16),
    time = Math.round(Date.now() / 1000),
    once = getRandNumber(6),
    url: string = request.url || "",
    platform: string = "QQ",
    sign = signature(url, platform, once, time, char),
    method = request.method || "get",
    data =
      method.toString().toUpperCase() == "GET" ? request.params : request.data,
    encryptData = {
      once,
      time,
      ...data,
    },
    parameter = paramsMd5(encryptData, once, time, char);

  request.headers.platform = platform;
  request.headers.signature = sign;
  request.headers.once = once;
  request.headers.time = time;
  request.headers.parameter = parameter;

  return request;
};

const handleRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

const handleResponseError = (error: _ResponseError) => {
  const { response } = error;
  if (!response) {
    return Promise.reject(error);
  }

  const { data } = response;

  if (data && (data as _ResponseData)) {
    return data;
  }

  switch (error.code) {
    case ECONNABORTED:
      Promise.reject(error);
      break;
    default:
      Promise.reject(error);
      break;
  }
};

axios.defaults.baseURL = conf.baseUrl + conf.version;
// axios.defaults.baseURL = conf.host + ":" + conf.port + "/";
axios.defaults.timeout = conf.timeout;
// axios.defaults.cancelToken = cancel; // It's not necessary for default。
axios.defaults.validateStatus = (status: number) =>
  status >= 200 && status < 300;
// axios.defaults.withCredentials = true;
axios.defaults.maxRedirects = conf.redirects;
axios.interceptors.request.use(handleRequest, handleRequestError);
axios.interceptors.response.use(handleResponse, handleResponseError);
