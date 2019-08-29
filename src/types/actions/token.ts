export const LOGIN: string = 'LOGIN';
export const LOGOUT: string = 'LOGOUT';
export interface TOKEN_DATA {
    token: string;
}

export interface LOGIN_ACTION {
    type: typeof LOGIN;
    payload: TOKEN_DATA;
}

export interface LOGOUT_ACTION {
    type: typeof LOGOUT;
    payload: TOKEN_DATA;
}

export type TOKEN_ACTION = LOGOUT_ACTION | LOGIN_ACTION;