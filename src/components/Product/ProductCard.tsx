import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeProductAmount } from '../../store/actions/actionCreators/shop'

//Styles
import "./ProductCard.scss";

//Types
import { Product } from "../../store/reducers/types";
import { ApplicationState } from "../../store/store";

interface Props {
  productId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductCard: React.FC<Props> = ({ productId }) => {
  const dispatch = useDispatch()

  const product: Product = useSelector( ( state: ApplicationState ) => {
    return state.shop.products.filter((item) => {
      return item.id === productId
    })[0]
  } )

  const [ amount, setAmount ] = useState<number>( product.amount )
  const [ errors, setErrors ] = useState<string[] | []>( [] )

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let amount: number = parseInt(e.target.value)

    if ( !amount ) {
      amount = 0
    }

    setAmount( amount )
    dispatch( changeProductAmount( product, amount ) )
  }

  const validateInputs = (): boolean => {
    let filterPass = true
    let errors: string[] = []

    setErrors(errors)

    return filterPass
  }

  return (
    <div className="row py-1 mb-1 align-items-center">
      <div className="col-lg-8">
        <h3>{product.name}</h3>
      </div>
      <div className="col-lg-2">
        <input type="text" value={amount} onChange={(e) => handleAmountChange(e)} />
      </div>
      <div className="col-lg-2 text-right">
        <button className="btn btn-primary">Remove</button>
      </div>
      { errors && (errors as any[]).map((error: string) =>  <p key={error} className="text-danger">{error}</p> ) }
    </div>
  );
};

export default ProductCard;
