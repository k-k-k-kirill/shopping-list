//Types
import { Product } from "../store/reducers/types";

const removeItemFromArrayById = (
  products: Product[],
  action: any
): Product[] => {
  return products.filter((item) => {
    return item.id !== action.payload;
  });
};

export default removeItemFromArrayById;
