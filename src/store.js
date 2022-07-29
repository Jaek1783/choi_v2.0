import { createStore, combineReducers } from "redux";

//export 한 reducer를 import시켜주면 된다
import Portfolio from "./Redux/Portfolio";
const rootReducer = combineReducers({ Portfolio });

const store = createStore(rootReducer);

export default store;