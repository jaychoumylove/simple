import axios, {
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	CancelTokenSource 
} from 'axios';
import conf from "./config";
import { _ReponseError, _ResponseData, ECONNABORTED } from "../types/axios";

export const source: CancelTokenSource = axios.CancelToken.source();

const handleRequest = async (request: AxiosRequestConfig) => {
	const token = await Promise.resolve("sjhso8379e723heduhi897y232ioe");
	request.headers.token = token;
	return request;
}

const handleRequestError = (error: AxiosError) => {
	return Promise.reject(error);
}

const handleResponse = (response: AxiosResponse) => {
	return response.data;
}

const handleResponseError = (error: _ReponseError) => {
	const { response } = error;

	const { data } = response;

	if (data as _ResponseData) {
		return data;
	} else {
		switch (error.code) {
			case ECONNABORTED:
				Promise.reject(error);
				break;
			default:
				Promise.reject(error);
				break;
		}
	}
}

// axios.defaults.baseURL = conf.baseUrl + conf.version;
axios.defaults.baseURL = conf.host + ":" + conf.port + "/";
axios.defaults.timeout = conf.timeout;
// axios.defaults.cancelToken = cancel; // It's not necessary for default。
axios.defaults.validateStatus = (status: number) => status >= 200 && status < 300;
// axios.defaults.withCredentials = true;
axios.defaults.maxRedirects = conf.redirects;
axios.interceptors.request.use(handleRequest, handleRequestError);
axios.interceptors.response.use(handleResponse, handleResponseError);
