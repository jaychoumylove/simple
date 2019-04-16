import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store: Store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk,logger),
));

export default store;
