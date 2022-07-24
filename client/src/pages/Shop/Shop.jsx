import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetcher = async () => {
            const resProductList = await axios.get('http://localhost:8000/api/v1/product/list')
            const productData = resProductList?.data?.data
            const resCategoryList = await axios.get('http://localhost:8000/api/v1/category/list')
            const categoryData = resCategoryList?.data?.data
            setProducts(productData)
            setCategories(categoryData)
        }
        fetcher()
    }, [])

    return (
        <>
            <div className="inner-banner inner-banner--style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-banner-content inner-banner-content--styl-1">
                                <h2 className="banner-title">Shop Page</h2>
                                <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Shop
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner-banner */}

            <div className="shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-8">
                            <div className="sidebar-content ecom-sidebar-sticky">
                                <form action="#" className="filter-form">
                                    <div className="product-filters-wrapper">
                                        <div className="product-filter-single">
                                            <h3 className="product-filter-title">
                                                Categories
                                            </h3>
                                            {categories && (
                                                <ul className="filter-list category-list list">
                                                    {categories.map((category) => (
                                                        <li key={category?._id}>
                                                            <span>
                                                                <div className="filter-check-group">
                                                                    <input type="checkbox" className="ecom-checkbox" id={category?._id} name={category?._id} />
                                                                    <label htmlFor={category?._id} className="ecom-checkbox-label">
                                                                        <span className="check-mark"></span>
                                                                        <span className="list-text">{category?.name}</span>
                                                                        {/* <span className="item-count">(12)</span> */}
                                                                    </label>
                                                                </div>
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {/* end product-filter-single  */}

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {products && (
                                <div className="row gx-4 gy-5">
                                    {products.map((product) => (
                                        <div className="col-lg-4 col-sm-6" key={product?._id}>

                                            <div className="ecom-product ecom-product-style-1">
                                                <div className="ecom-product-img">
                                                    <Link to="/" className="ecom-img-link">
                                                        <img className="ecom-img-normal" src={product?.image} alt="product-img" loading="lazy" />
                                                    </Link>
                                                </div>
                                                <div className="ecom-product-content">
                                                    <div className="ecom-product-category">
                                                        <Link to="/">
                                                            <span className="ecom-category-outline">
                                                                Electronics
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <Link to="/">{product?.name}</Link>
                                                    </h3>
                                                    <div className="product-price">
                                                        <span className="price">
                                                            <span className="amount">
                                                                <span className="symbol">$</span>{product?.price}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="ecom-action-buttons">
                                                        <ul className="ecom-action-button-list">
                                                            <li className="ecom-action-button-item ecom-cart">
                                                                <button className="ecom-action-btn">
                                                                    <span className="icon">
                                                                        <svg height="1em" width="1em" viewBox="0 0 576 512" fill="currentColor"><path d="M171.7 191.1H404.3L322.7 35.07C316.6 23.31 321.2 8.821 332.9 2.706C344.7-3.409 359.2 1.167 365.3 12.93L458.4 191.1H544C561.7 191.1 576 206.3 576 223.1C576 241.7 561.7 255.1 544 255.1L492.1 463.5C484.1 492 459.4 512 430 512H145.1C116.6 512 91 492 83.88 463.5L32 255.1C14.33 255.1 0 241.7 0 223.1C0 206.3 14.33 191.1 32 191.1H117.6L210.7 12.93C216.8 1.167 231.3-3.409 243.1 2.706C254.8 8.821 259.4 23.31 253.3 35.07L171.7 191.1zM191.1 303.1C191.1 295.1 184.8 287.1 175.1 287.1C167.2 287.1 159.1 295.1 159.1 303.1V399.1C159.1 408.8 167.2 415.1 175.1 415.1C184.8 415.1 191.1 408.8 191.1 399.1V303.1zM271.1 303.1V399.1C271.1 408.8 279.2 415.1 287.1 415.1C296.8 415.1 304 408.8 304 399.1V303.1C304 295.1 296.8 287.1 287.1 287.1C279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C416 295.1 408.8 287.1 400 287.1C391.2 287.1 384 295.1 384 303.1V399.1C384 408.8 391.2 415.1 400 415.1C408.8 415.1 416 408.8 416 399.1V303.1z" /></svg>
                                                                    </span>
                                                                    <span className="text">Add to Cart</span>
                                                                </button>
                                                            </li>
                                                            <li className="ecom-action-button-item ecom-wishlist">
                                                                <button className="ecom-action-btn">
                                                                    <span className="icon">
                                                                        <svg height="1em" width="1em" fill="currentColor" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg>
                                                                    </span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Shop;
