import React from 'react';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { receivedProducts } from '../store/slices/productsSlice';
import '../styles/Products.css';
import { getProducts } from '../services/api';

export function Products() {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    useEffect(() => {
        getProducts().then((products) => {
            dispatch(receivedProducts(products));
        });
    }, [])
    return (
        <div className="products">
            <h2>Products</h2>
            <ul className={products}>
                {Object.values(products).map((product) => (
                    <li key={product.id}>
                        <p>{product.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Products

