export interface Product {
  name: string;
  amount: number;
  id: string;
}

export interface ShopState {
  products: Product[];
}
