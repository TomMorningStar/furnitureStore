import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import armchairs from "./features/armchairs";
import sofas from "./features/sofas";
import user from "./features/user";
import basket from "./features/basket";
import liked from "./features/liked";

const combineRouter = combineReducers({
  liked,
  basket,
  user,
  armchairs,
  sofas,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
