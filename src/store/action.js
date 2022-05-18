import * as actions from "./actionTypes";

//FETCH PRODUCTS INFO
export const fetchProductsBegin = () => ({
  type: actions.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: actions.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = error => ({
  type: actions.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

//FETCH PRODUCT DETAIL INFO
export const fetchProductBegin = () => ({
  type: actions.FETCH_PRODUCT_BEGIN
});

export const fetchProductSuccess = product => ({
  type: actions.FETCH_PRODUCT_SUCCESS,
  payload: product
});

export const fetchProductFailure = error => ({
  type: actions.FETCH_PRODUCT_FAILURE,
  payload: { error }
});

//ADD TO CART
export const addToCart = (item) => {
  return {
    type: actions.ADD_TO_CART,
    payload: item,
  };
};

//PLUS QUANTITY
export const plusQuantity = (item) => {
  return {
    type: actions.PLUS_QUANTITY,
    payload: item,
  };
};

//MINUS QUANTITY
export const minusQuantity = (item) => {
  return {
    type: actions.MINUS_QUANTITY,
    payload: item,
  };
};

//REMOVE FROM CART
export const removeFromCart = (item) => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item,
  };
};

//CLEAR CART
export const clearCart = (item) => {
  return {
    type: actions.CLEAR_CART,
    payload: item,
  };
};


