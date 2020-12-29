import React from "react";
import ProductList from '../components/ProductList/ProductList'

//Components
import Base from "../components/Base/Base";

const Products: React.FC = () => {
  return (
    <div>
      <Base>
        <ProductList />
      </Base>
    </div>
  );
};

export default Products;
