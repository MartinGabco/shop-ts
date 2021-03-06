import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { receivedProducts } from '../store/slices/productsSlice';
import { receivedBrands } from '../store/slices/productsSlice';
import { getProducts } from '../services/api';
import { getBrands } from '../services/api';
import '../styles/Products.css';

export function Products() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.products);
    const brands = useAppSelector(state => state.brands.brands);

    useEffect(() => {
        getProducts().then((products) => {
            dispatch(receivedProducts(products));
        });       
    }, []);

    useEffect(() => {
       getBrands().then((brands) => {
           dispatch(receivedBrands(brands));
       })
    }, []);

    const state = {
        brands: getBrands()
    }
    console.log(state);

    return (
        <div className="products">
            <h1>PRODUCTS</h1>
                <ul>
                    {Object.values(brands).map(brand => (
                        <li>
                            <p>{brand.name}</p>
                        </li>
                    ))}
                </ul>
                <ul className="productsWrapper">
                    {Object.values(products).map(product => 
                        (<li key={product.id}>
                            <div className="productBox">
                                <h3>{product.name}</h3>
                                <p>{product.brand}</p>
                                <img src={product.image_link} alt="image" className="image"/>
                                <div className="price">
                                    <span className="price-wrap">
                                        <strong>{product.price}{product.price_sign}</strong>
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    )
};

export default Products;
