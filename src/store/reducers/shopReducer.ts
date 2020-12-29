import { ShopState } from "./types";
import actions from "../actions";

//Utils
import generateProucts from "../../utils/generateProducts";

const initialState: ShopState = {
  products: generateProucts(10),
  productCount: 0,
};

export const shopReducer = (state: ShopState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
