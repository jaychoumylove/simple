import axios, { AxiosRequestConfig, CancelToken, AxiosResponse, AxiosError } from 'axios';
import * as conf from './config';

interface _Defaiults extends AxiosRequestConfig {
    loading: Boolean
    onTimeOut: Function
}

const ECONNABORTED = 'ECONNABORTED';

type _Code = 'ECONNABORTED';

const handleTimeOut = (request:AxiosRequestConfig) => console.info('request is timeout!', request);

const cancelToken: CancelToken = {
    promise: new Promise(cancel => console.info('you canceled last request.')),
    throwIfRequested: () => console.info('cancel failed for requested!')
}

const defaults: _Defaiults = {
    loading: true,
    onTimeOut: handleTimeOut,
    baseURL: conf.baseUrl + conf.version,
    timeout: conf.timeout,
    withCredentials: true,
    // headers: {}, // using default AxiosTransformer for data and headers
    validateStatus: (status: Number) => status >= 200 && status < 300,
    maxRedirects: 5,
    cancelToken: cancelToken
}

interface _ResponseData {
	error_code: Number
	data: Readonly<Object | null>
	message: String
	requesr_url: String
}

interface _ReponseError extends AxiosError {
	request: AxiosRequestConfig
	response: AxiosResponse
	code: _Code
	config: _Defaiults
}

const _handleRequest = async (request: AxiosRequestConfig) => {
	const token = await Promise.resolve('sjhso8379e723heduhi897y232ioe');

	request.headers['token'] = token;

	return request;
}

const _handleRequestError = (error: AxiosError) => {
	console.log(error);
	return Promise.reject(error);
}

const _handleResponse = (response: AxiosResponse) => {
	const request = response.request;

	if (request.loading) console.info('loaded!');

	return response.data;
}

const _handleResponseError = (error: _ReponseError) => {
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
				console.log('fontend mistake in code ', error.code);
				Promise.reject(error);
				break;
		}
	}
}

axios.defaults = defaults;
axios.interceptors.request.use(_handleRequest,_handleRequestError);
axios.interceptors.response.use(_handleResponse,_handleResponseError);