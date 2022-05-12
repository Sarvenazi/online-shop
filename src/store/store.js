import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer, productsReducer, userinfoReducer, addProductReducer } from "./reducer";

const reducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  userinfo: userinfoReducer,
  order: addProductReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
