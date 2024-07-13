// src/components/ProductDashboard.jsx
import React, { useEffect, useState } from 'react';

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ))}
        </div>
    );
};

export default ProductDashboard;
