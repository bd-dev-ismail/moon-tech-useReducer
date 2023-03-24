import { actionTypes } from "./actionTypes";

export const initalState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishList: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    //fetching start case!
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    //fetching success case!
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    //fetching error case!
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,

        error: true,
      };
    //add to cart case!
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    //Remove to cart case!
    case actionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    //add to wishlist
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    //default case (always return defautl state)
    default:
      return state;
  }
};
