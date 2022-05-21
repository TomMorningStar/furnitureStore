import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import armchairs from "./features/armchairs";
import sofas from "./features/sofas";

const combineRouter = combineReducers({
  armchairs,
  sofas,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
