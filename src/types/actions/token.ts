export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export interface TOEKENDATA {
    token: String
}

export interface LOGINACTION {
    type: typeof LOGIN
    payload: TOEKENDATA 
}

export interface LOGOUTACTION {
    type: typeof LOGOUT
    payload: TOEKENDATA
}

export type TOKENACTION = LOGOUTACTION | LOGINACTION;