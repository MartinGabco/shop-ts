import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Products.css';
import { getProducts } from '../services/api';

const things = {
    products: getProducts()
}

const Products = (props: Props) => {
    const initialState = {
        items: things
    };
    const state = initialState.items.products;

    const [mine, setMine] = useState([]);

    useEffect(() => {
        setMine(state)
    }, [])

    console.log(mine);
    return (
        <div className="products">
            <h2>Products</h2>
        </div> 
    )
}

export default Products

