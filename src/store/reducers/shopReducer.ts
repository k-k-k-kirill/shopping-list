import { ShopState } from "./types";

//Utils
import generateProucts from "../../utils/generateProducts";

//Actions
import actions from "../actions/actionTypes";

//Utils
import updateProductById from "../../utils/updateProductById";

const initialState: ShopState = {
  products: generateProucts(5),
};

export const shopReducer = (state: ShopState = initialState, action: any) => {
  switch (action.type) {
    case actions.shop.CHANGE_PRODUCT_AMOUNT:
      const products = updateProductById(state.products, action);
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
};
