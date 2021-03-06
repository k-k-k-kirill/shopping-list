import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  changeProductAmount,
  changeProductName,
  removeProduct,
} from "../../store/actions/actionCreators/shop";

//Types
import { Product } from "../../store/reducers/types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(product.amount);
  const [name, setName] = useState<string>(product.name);
  const [errors, setErrors] = useState<string[] | []>([]);

  const valdiateProductName = (productName: string): boolean => {
    let filterPass = true;
    let errors: string[] = [];

    if (productName === "") {
      errors.push("Please, enter valid product name.");
      filterPass = false
    }

    setErrors(errors);

    return filterPass;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let amount: number = parseInt(e.target.value);

    if (!amount) {
      amount = 0;
    }

    setAmount(amount);
    dispatch(changeProductAmount(product, amount));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name: string = e.target.value;

    if (valdiateProductName(name)) {
      setName(name);
      dispatch(changeProductName(product, name));
    }
  };

  const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <>
      <div className="row py-1 mb-1 align-items-center product-card">
        <div className="col-lg-8">
          <input
            className="product-name"
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className="col-lg-2">
          <input
            className="product-amount"
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e)}
          />
        </div>
        <div className="col-lg-2 text-right">
          <button className="btn btn-primary" onClick={handleRemoveClick}>
            Remove
          </button>
        </div>
      </div>

      {errors && (
        <div className="row">
          <div className="col-lg-12">
            {(errors as any[]).map((error: string) => (
              <p key={error} className="text-danger">
                {error}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
