import { TOEKENDATA, LOGIN, LOGOUT, TOKENACTION, LOGOUTACTION, LOGINACTION } from "../types/actions/token";
// import * as axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const defaultState: TOEKENDATA = {
    token: "",
};

export function token(state: TOEKENDATA = defaultState, action: TOKENACTION):TOEKENDATA  {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}

export const login = (name: string, password: string): ThunkAction<Promise<void>, {}, {}, LOGINACTION> => {
    return async (dispatch: ThunkDispatch<{}, {}, LOGINACTION>): Promise<void> => {
        // delay(3000);
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                dispatch({ type: LOGIN, payload: { token: "ok" }})
            }, 3000);
        })
    }
}

export function logout(): LOGOUTACTION {
    return { type: LOGOUT, payload: { token: "" }};
}
