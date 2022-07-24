import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='product'>
            <div className="product-img">
                <Link to="/">
                    <img src="" alt="" />
                </Link>
            </div>
            <div className="product-content">
                <div className="category-wrap">
                    <span className="category">
                        Category
                    </span>
                </div>
                <div className="title-wrap">
                    <h3 className="product-name">Apple Watch</h3>
                </div>
                <div className="description-wrap">
                    <p className='product-description'>
                        To make the best use of its size and location on your wrist, Apple Watch has all-new interactions
                    </p>
                </div>
                <div className="price-wrap">
                    <div className="price">$599</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard