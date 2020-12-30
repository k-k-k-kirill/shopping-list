import actions from "../actionTypes";

//Types
import { Product } from "../../reducers/types";

export const changeProductAmount = (product: Product, amount: number) => {
  return {
    type: actions.shop.CHANGE_PRODUCT_AMOUNT,
    payload: {
      ...product,
      amount,
    },
  };
};