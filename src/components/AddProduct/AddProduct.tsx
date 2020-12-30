import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Styles
import "./AddProduct.scss";

//Actions
import { addProduct } from "../../store/actions/actionCreators/shop";

//Types
import { Product } from "../../store/reducers/types";
import { ApplicationState } from "../../store/store";

//Utils
import generateId from "../../utils/generateId";

const AddProduct: React.FC = () => {
  const dispatch = useDispatch();

  const existingProducts: any = useSelector<ApplicationState>(
    (state: ApplicationState) => state.shop.products
  );

  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [errors, setErrors] = useState<string[] | []>([]);

  const validateName = (name: string): boolean => {
    let filterPass = true;
    let errors: string[] = [];

    if (name === "") {
      errors.push("Please, enter valid product name.");
      filterPass = false;
    }

    const nameExists: boolean =
      existingProducts.filter((item: Product) => {
        return item.name == name;
      }).length > 0;

    if (nameExists) {
      errors.push("This product name is already taken.");
      filterPass = false;
    }

    setErrors(errors);

    return filterPass;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.value;
    validateName(name);
    setName(name);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let amount: number = parseInt(e.target.value);

    if (!amount) {
      amount = 0;
    }

    setAmount(amount);
  };

  const handleAddProductClick = () => {
    const product: Product = {
      name,
      amount,
      id: generateId(),
    };

    if (validateName(name)) {
      dispatch(addProduct(product));
      setName('')
      setAmount(0)
    }
  };

  return (
    <div className="container">
      <div className="row pb-1 mb-1 add-product__headers">
        <div className="col-lg-8">
          <h3 className="font-weight-bold">Add New Products</h3>
        </div>
      </div>
      <div className="row py-1 mb-1 align-items-center">
        <div className="col-lg-8">
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="col-lg-2">
          <input type="text" value={amount} onChange={handleAmountChange} />
        </div>
        <div className="col-lg-2 text-right">
          <button className="btn btn-primary" onClick={handleAddProductClick}>
            Add Product
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
    </div>
  );
};

export default AddProduct;
