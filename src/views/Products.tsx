import React from "react";

//Components
import Base from "../components/Base/Base";
import ProductList from "../components/ProductList/ProductList";
import AddProduct from "../components/AddProduct/AddProduct";

const Products: React.FC = () => {
  return (
    <div>
      <Base>
        <ProductList />
        <AddProduct />
      </Base>
    </div>
  );
};

export default Products;
