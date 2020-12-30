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

export const changeProductName = (product: Product, name: string) => {
  return {
    type: actions.shop.CHANGE_PRODUCT_NAME,
    payload: {
      ...product,
      name,
    },
  };
};

export const removeProduct = (id: string) => {
  return {
    type: actions.shop.REMOVE_PRODUCT,
    payload: id,
  };
};

export const addProduct = (product: Product) => {
  return {
    type: actions.shop.ADD_PRODUCT,
    payload: {
      ...product
    }
  }
}
