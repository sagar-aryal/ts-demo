import { combineReducers } from "redux";
import reducerA from "./reducerA";

const reducers = combineReducers({
  reducerA: reducerA,
});

export default reducers;
