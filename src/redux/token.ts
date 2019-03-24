import { TOEKENDATA, LOGIN, LOGOUT, TOKENACTION, LOGOUTACTION, LOGINACTION } from "../types/actions/token";
import { delay } from "q";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const defaultState:TOEKENDATA = {
    token: "",
};

export function token(state:TOEKENDATA = defaultState, action: TOKENACTION):TOEKENDATA  {
    switch(action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
}

export async function login(name: String, password: String) {
    delay(3000);

    const { token } = await Promise.resolve({ token: 'ok'});

    return { type: LOGIN, payload: { token }};
}

export const loginA = (name: String, password: String): ThunkAction<Promise<void>, {}, {}, LOGINACTION> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, LOGINACTION>): Promise<void> => {
        delay(3000);
        return new Promise<void>((resolve) => {
            // dispatch(isFetching(true))
            setTimeout(() => {
                dispatch({ type: LOGIN, payload: { token: 'ok' }})
            }, 3000);
            // dispatch({ type: LOGIN, payload: { token: 'ok' }})
        })
    }
}

export function logout(): LOGOUTACTION {
    return { type: LOGOUT, payload: { token: '' }};
}
