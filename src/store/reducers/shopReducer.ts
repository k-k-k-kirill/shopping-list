import { ShopState } from "./types";

//Actions
import actions from "../actions/actionTypes";

//Utils
import updateProductById from "../../utils/updateProductById";
import generateProucts from "../../utils/generateProducts";
import removeItemFromArrayById from "../../utils/removeItemFromArrayById";

const initialState: ShopState = {
  products: generateProucts(5),
};

export const shopReducer = (state: ShopState = initialState, action: any) => {
  switch (action.type) {
    case actions.shop.CHANGE_PRODUCT_AMOUNT:
      return {
        ...state,
        products: updateProductById(state.products, action),
      };
    case actions.shop.CHANGE_PRODUCT_NAME:
      return {
        ...state,
        products: updateProductById(state.products, action),
      };
    case actions.shop.REMOVE_PRODUCT:
      return {
        ...state,
        products: removeItemFromArrayById(state.products, action),
      };
    case actions.shop.ADD_PRODUCT:
      let products = [...state.products]
      products.push(action.payload)

      return {
        ...state,
        products
      }
    default:
      return state;
  }
};
