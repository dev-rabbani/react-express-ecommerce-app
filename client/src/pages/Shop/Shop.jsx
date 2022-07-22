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
                                            <div className="card-media card-img-top">
                                                <img src={product?.image} alt="" />
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        {product?.name}
                                                    </h3>
                                                    <p>
                                                        {product?.category?.name}
                                                    </p>
                                                    <p>
                                                        {product?.description}
                                                    </p>
                                                    <p>
                                                        ${product?.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* <div className="row gx-4 gy-5">
                <div className="col-xl-4 col-sm-6">
                  <div className="ecom-product ecom-product-grid ecom-product-grid-style-1 ecom-double-img">
                    <div className="ecom-product-img">
                      <a href="#" className="ecom-img-link">
                        <img className="ecom-img-normal" src="image/product/product-1.png" alt="product-img" width="600" height="660" loading="lazy" />
                        <img className="ecom-img-hover" src="image/product/product-8.png" alt="product-img" width="600" height="660" loading="lazy" />
                      </a>
                      <div className="ecom-promotion">
                        <ul className="ecom-promotion-list">
                          <li className="ecom-promotion-list-item">
                            <span className="ecom-tag-fill">
                              -5%
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="ecom-action-buttons ecom-action-buttons-cart-box-width-auto">
                        <ul className="ecom-action-button-list">
                          <li className="ecom-action-button-item ecom-cart">
                            <a href="#" className="ecom-action-btn">
                              <span className="icon">
                                <svg height="1.375em" width="1.375em" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.25 18.5625C8.25 18.8345 8.16936 19.1003 8.01827 19.3264C7.86718 19.5525 7.65244 19.7288 7.40119 19.8328C7.14994 19.9369 6.87347 19.9641 6.60675 19.9111C6.34003 19.858 6.09503 19.7271 5.90273 19.5348C5.71043 19.3425 5.57947 19.0975 5.52642 18.8308C5.47337 18.564 5.5006 18.2876 5.60467 18.0363C5.70874 17.7851 5.88497 17.5703 6.11109 17.4192C6.33721 17.2681 6.60305 17.1875 6.875 17.1875C7.23967 17.1875 7.58941 17.3324 7.84727 17.5902C8.10513 17.8481 8.25 18.1978 8.25 18.5625ZM15.8125 17.1875C15.5406 17.1875 15.2747 17.2681 15.0486 17.4192C14.8225 17.5703 14.6462 17.7851 14.5422 18.0363C14.4381 18.2876 14.4109 18.564 14.4639 18.8308C14.517 19.0975 14.6479 19.3425 14.8402 19.5348C15.0325 19.7271 15.2775 19.858 15.5443 19.9111C15.811 19.9641 16.0874 19.9369 16.3387 19.8328C16.5899 19.7288 16.8047 19.5525 16.9558 19.3264C17.1069 19.1003 17.1875 18.8345 17.1875 18.5625C17.1875 18.1978 17.0426 17.8481 16.7848 17.5902C16.5269 17.3324 16.1772 17.1875 15.8125 17.1875ZM19.7141 6.37656L17.4453 14.3172C17.3207 14.7476 17.0599 15.1261 16.702 15.3957C16.344 15.6653 15.9083 15.8116 15.4602 15.8125H7.22734C6.77922 15.8116 6.34349 15.6653 5.98555 15.3957C5.62761 15.1261 5.36677 14.7476 5.24219 14.3172L2.97344 6.38516V6.36797L2.13125 3.4375H0.6875C0.505164 3.4375 0.330295 3.36507 0.201364 3.23614C0.0724328 3.1072 0 2.93234 0 2.75C0 2.56766 0.0724328 2.3928 0.201364 2.26386C0.330295 2.13493 0.505164 2.0625 0.6875 2.0625H2.13125C2.42988 2.06358 2.72015 2.16126 2.95869 2.34093C3.19722 2.52061 3.37122 2.77264 3.45469 3.05938L4.15078 5.5H19.0523C19.1588 5.49989 19.2639 5.52451 19.3592 5.57194C19.4546 5.61936 19.5376 5.68829 19.6018 5.77328C19.6659 5.85827 19.7095 5.95701 19.729 6.0617C19.7484 6.16639 19.7433 6.27418 19.7141 6.37656V6.37656ZM18.1414 6.875H4.54609L6.56563 13.9391C6.60674 14.0828 6.69357 14.2092 6.81298 14.2991C6.93238 14.3891 7.07785 14.4377 7.22734 14.4375H15.4602C15.6096 14.4377 15.7551 14.3891 15.8745 14.2991C15.9939 14.2092 16.0808 14.0828 16.1219 13.9391L18.1414 6.875Z"></path>
                                </svg>
                              </span>
                              <span className="text">Add to Cart</span>
                            </a>
                          </li>
                          <li className="ecom-action-button-item ecom-wishlist" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="wishlist">
                            <a href="#" className="ecom-action-btn">
                              <span className="icon">
                                <svg height="1.375em" width="1.375em" viewBox="0 0 22 22" stroke="currentColor" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2.75 11C0.6875 8.24999 1.375 4.12499 4.8125 2.74999C8.25 1.37499 10.3125 4.12499 11 5.49999C11.6875 4.12499 14.4375 1.37499 17.875 2.74999C21.3125 4.12499 21.3125 8.24999 19.25 11C17.1875 13.75 11 19.25 11 19.25C11 19.25 4.8125 13.75 2.75 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li className="ecom-action-button-item ecom-quick-view" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Quick View">
                            <a href="#" className="ecom-action-btn">
                              <span className="icon">
                                <svg height="1.375em" width="1.375em" viewBox="0 0 22 22" stroke="currentColor" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.625 17.875C14.1813 17.875 17.875 14.1813 17.875 9.625C17.875 5.06865 14.1813 1.375 9.625 1.375C5.06865 1.375 1.375 5.06865 1.375 9.625C1.375 14.1813 5.06865 17.875 9.625 17.875Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M15.8125 15.8125L20.625 20.625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ecom-product-content">
                      <div className="ecom-product-category">
                        <ul className="ecom-category-list">
                          <li className="ecom-category-list-item">
                            <a href="#" className="ecom-category-outline">
                              Electronics
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product-title">
                        <a href="#">Led Stand Lamp</a>
                      </h3>
                      <div className="product-price ecom-item-space-between">
                        <span className="price">
                          <del>
                            <span className="amount">
                              <span className="symbol">$</span>824
                            </span>
                          </del>
                          <ins>
                            <span className="amount">
                              <span className="symbol">$</span>550
                            </span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>*/}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Shop;
