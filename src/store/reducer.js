import * as actions from "./actionTypes";

export const productsReducer = (state = { loading: Boolean, items: [] }, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_BEGIN:
      return { ...state };
    case actions.FETCH_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload, loading: false };
    case actions.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const productReducer = (state = { loading: Boolean, items: [] }, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCT_BEGIN:
      return { ...state };
    case actions.FETCH_PRODUCT_SUCCESS:
      return { ...state, items: action.payload, loading: false };
    case actions.FETCH_PRODUCT_FAILURE:
      return { ...state, loading: true };
    default:
      return state;
  }
};


//CART REDUCER
const addToCartiState = {
  products: [],
};

export const addToCartReducer = (state = addToCartiState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const isInCart = state.products.some(item => item.id === action.payload.id);

      if (isInCart) {
        // update existing item in cart
        return {
          ...state,
          products: state.products.map(
            item => item.id === action.payload.id
              ? {
                ...item,
                quantity: item.quantity + 1,
              }
              : item
          ),
        };
      }

      // add new item to cart
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            quantity: 1
          },
        ],
      };

    case actions.PLUS_QUANTITY:
      return {
        ...state,
        products: state.products.map(
          item => item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity + action.payload.quantity
            }
            : item
        ),
      };

    case actions.MINUS_QUANTITY:
      const item = state.products.find(item => item.id === action.payload.id);

      if (item?.quantity === 1) {
        // new quantity is 0, remove item from cart
        return {
          ...state,
          products: state.products.filter(item => item.id !== action.payload.id),
        };
      }

      // decrement quantity
      return {
        ...state,
        products: state.products.map(
          item => item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity - action.payload.quantity
            }
            : item
        ),
      };

    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case actions.CLEAR_CART:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};
export const userinfoReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actions.GET_USER_INFO:
      return { ...state, loading: true };
    case actions.GET_USER_INFO_SUCCESS:
      return { loading: false, userinfo: action.payload };
    case actions.GET_USER_INFO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addProductReducer = (state = { order: [] }, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_SHOPPINGCART_REQUEST:
      return { ...state, loading: true };
    case actions.ADD_PRODUCT_SHOPPINGCART_REQUEST_SUCCESS:
      return { loading: false, order: action.payload };
    case actions.ADD_PRODUCT_SHOPPINGCART_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
