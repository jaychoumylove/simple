import {
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError
} from 'axios';

export const ECONNABORTED: string = 'ECONNABORTED';

export type _Code = 'ECONNABORTED';

export interface _ResponseData {
	error_code: number;
	data: Readonly < Object | null > ;
	message: string;
	request_url: string;
}

export interface _ResponseError extends AxiosError {
	request: AxiosRequestConfig;
	response: AxiosResponse;
	code: _Code;
	config: AxiosRequestConfig;
}