import React from "react";
import { useSelector } from "react-redux";

//Types
import { ApplicationState } from "../../store/store";
import { Product } from "../../store/reducers/types";

const ProductList: React.FC = () => {
  const products: Product[] = useSelector(
    (state: ApplicationState) => state.shop.products
  );

  return (
    <div>
      {products && products.map((product) => <div>{product.name}</div>)}
    </div>
  );
};

export default ProductList;
