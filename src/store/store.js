import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToCartReducer, productReducer, productsReducer, userinfoReducer } from "./reducer";

const reducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  order: addToCartReducer,
  userinfo: userinfoReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
