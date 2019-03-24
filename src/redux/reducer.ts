import { combineReducers } from "redux";
import { token } from "./token";
import ROOTDATA from "../types/reducer";

export const reducer = combineReducers<ROOTDATA>({ token });