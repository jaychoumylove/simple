import { combineReducers } from 'redux';
import { token } from './token';
import {default as ROOT_DATA} from '../types/reducer';

const reducer = combineReducers<ROOT_DATA>({ token });

export default reducer;
