export interface ShopState {
    products: [],
    productCount: number
}

const initialState: ShopState = {
    products: [],
    productCount: 0
}

export const shopReducer = (state: ShopState = initialState, action: any) => {
  switch (action.type) {
    case "INIT":
      console.log("init has happened");
      return state

    default:
      return state;
  }
};
