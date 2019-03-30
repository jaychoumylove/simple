import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export interface _Defaiults extends AxiosRequestConfig {
    loading: Boolean
    onTimeOut: Function
}

export const ECONNABORTED:string = 'ECONNABORTED';

export type _Code = 'ECONNABORTED';

export interface _ResponseData {
	error_code: Number
	data: Readonly<Object | null>
	message: String
	requesr_url: String
}

export interface _ReponseError extends AxiosError {
	request: AxiosRequestConfig
	response: AxiosResponse
	code: _Code
	config: _Defaiults
}