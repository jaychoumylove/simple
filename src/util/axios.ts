import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, CancelTokenSource } from 'axios';
import conf from './config';
import { _Defaiults, _ReponseError, _ResponseData, ECONNABORTED } from '../types/axios';

export const source: CancelTokenSource = axios.CancelToken.source();

const _handleRequest = async (request: AxiosRequestConfig) => {
	const token = await Promise.resolve('sjhso8379e723heduhi897y232ioe');
	request.headers['token'] = token;
	return request;
}

const _handleRequestError = (error: AxiosError) => {
	console.log(error, 'request error');
	return Promise.reject(error);
}

const _handleResponse = (response: AxiosResponse) => {
	return response.data;
}

const _handleResponseError = (error: _ReponseError) => {
	console.info(error, 'response error');
	const { request, response, config } = error;

	const { data } = response;

	if (<_ResponseData>data) {
		return data;
	} else {
		switch (error.code) {
			case ECONNABORTED:
				config.onTimeOut(request);
				break;
			default:
				console.log('fontend maked mistake in code ', error.code);
				Promise.reject(error);
				break;
		}
	}
}

axios.defaults.baseURL = conf.baseUrl + conf.version;
axios.defaults.timeout = conf.timeout;
// axios.defaults.cancelToken = cancel; // It's not necessary for default。
axios.defaults.validateStatus = (status: Number) => status >= 200 && status < 300;
axios.defaults.withCredentials = true;
axios.defaults.maxRedirects = conf.redirects;
axios.interceptors.request.use(_handleRequest,_handleRequestError);
axios.interceptors.response.use(_handleResponse,_handleResponseError);