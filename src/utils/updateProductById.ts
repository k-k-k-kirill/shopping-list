import { Product } from "../store/reducers/types";

const updateProductById = (array: Product[], action: any) => {
  return array.map((item) => {
    if (item.id !== action.payload.id) {
      return item;
    }

    return {
      ...item,
      ...action.item,
    };
  });
};

export default updateProductById
