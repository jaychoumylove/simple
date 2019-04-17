import { combineReducers } from 'redux';
import { token } from './token';
import ROOTDATA from '../types/reducer';

const reducer = combineReducers<ROOTDATA>({ token });

export default reducer;
