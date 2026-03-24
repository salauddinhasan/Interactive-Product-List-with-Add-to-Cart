import React from 'react';

const Products = ({name, price}) => {
    return (
        <div className='bg-white shadow-md rounded-md border border-gray-200 -translate-y-2 transition-all hover:bg-gray-100 space-y-5 p-4'>
            <h2 className='text-xl font-semibold text-gray-600'>{name}</h2>
            <p>${price}</p>
            <button className='btn btn-primary'> Add to Cart</button>
            
        </div>
    );
};

export default Products;