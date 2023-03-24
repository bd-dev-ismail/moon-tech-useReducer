import { actionTypes } from "./actionTypes";

export const initalState = {
  loading: false,
  products: [],
  error: false,
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
    //default case (always return defautl state)
    default:
      return state;
  }
};
