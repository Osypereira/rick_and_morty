import { createStore, applyMiddleware, compose } from "redux";
import{ reducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// para conectar navegador con redux
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) //para peticionar server
);


export default store;

