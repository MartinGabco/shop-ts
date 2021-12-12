import type { Product } from './api';

export interface ProductsState {
    products: { [name: string]: Product}
}

const initialState: ProductsState = {
    products: {}
}

console.log(products);