import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../services/api';
import type { Brand } from '../../services/api';

export interface ProductsState {
    products: { [id: number]: Product },
    brands: { [id: number]: Brand }
};

const initialState: ProductsState = {
    products: {},
    brands: {},
};

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload;
            products.forEach((product) => {
                state.products[product.id] = product;
            });
        },
        receivedBrands(state, action: PayloadAction<Brand[]>) {
            const brands = action.payload;
            brands.forEach((brand) => {
                state.brands[brand.id] = brand;
            });
        }
    },
});

export const { receivedProducts, receivedBrands } = productsSlice.actions;
export default productsSlice.reducer;