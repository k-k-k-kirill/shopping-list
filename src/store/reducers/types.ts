export interface Product {
  name: string;
  price: number;
}

export interface ShopState {
  products: Product[];
  productCount: number;
}
