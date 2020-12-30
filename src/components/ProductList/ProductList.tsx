import React from "react";
import { useSelector } from "react-redux";

//Components
import ProductCard from "../Product/ProductCard";

//Types
import { ApplicationState } from "../../store/store";
import { Product } from "../../store/reducers/types";

//Styles
import "./ProductList.scss";

const ProductList: React.FC = () => {
  const products: Product[] = useSelector(
    (state: ApplicationState) => state.shop.products
  );

  return (
    <div className="container mb-3">
      <div className="row pb-1 mb-2 product-list__headers">
        <div className="col-lg-8">
          <h4 className="font-weight-bold">Name</h4>
        </div>
        <div className="col-lg-2">
          <h4 className="font-weight-bold">Amount</h4>
        </div>
      </div>

      {products && products.map((product) => <ProductCard key={product.id} productId={product.id} />)}
    </div>
  );
};

export default ProductList;
