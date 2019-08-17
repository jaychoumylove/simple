import {
    TOKEN_DATA,
    LOGIN,
    LOGOUT,
    TOKEN_ACTION,
    LOGIN_ACTION, LOGOUT_ACTION
} from '../types/actions/token';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const defaultState: TOKEN_DATA = {
	token: '',
};

export function token(state: TOKEN_DATA = defaultState, action: TOKEN_ACTION): TOKEN_DATA {
	switch (action.type) {
		case LOGIN:
			return action.payload;
		case LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export const login = (name: string, password: string): ThunkAction<Promise<void>, {}, {}, LOGIN_ACTION> => {
	return async (dispatch: ThunkDispatch<{}, {}, LOGIN_ACTION>): Promise<void> => {
		// delay(3000);
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				dispatch({ type: LOGIN, payload: { token: 'ok' }});
			}, 3000);
		});
	};
};

export function logout(): LOGOUT_ACTION {
	return { type: LOGOUT, payload: { token: '' }};
}
