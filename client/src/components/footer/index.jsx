import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-top footer-top--style-1">
                    <div className="container">
                        <div className="row g-4 justify-content-between">

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Online Shop</h3>
                                    <ul className="footer-list">
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Women Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Men Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Shirts</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">OuterWear</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Information</h3>
                                    <ul className="footer-list">
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Women Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Men Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Shirts</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">OuterWear</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Help & Support</h3>
                                    <ul className="footer-list">
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Women Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Men Collection</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">Shirts</span>
                                            </Link>
                                        </li>
                                        <li className="footer-list__item">
                                            <Link to="/" className="footer-list__link">
                                                <span className="text">OuterWear</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Contact Info</h3>
                                    <ul className="footer-list footer-list--without-bullet">
                                        <li className="footer-list__item">
                                            Phone:
                                            <a href="tel:888-999-000-1425" className="footer-list__link">
                                                <span className="text">888-999-000-1425</span>
                                            </a>
                                        </li>
                                        <li className="footer-list__item">
                                            Email:
                                            <a href="mailto:shopxpert@mail.com" className="footer-list__link">
                                                <span className="text">shopxpert@mail.com</span>
                                            </a>
                                        </li>
                                        <li className="footer-list__item">
                                            Address: 22 Kazi Street, Newyork City
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom footer-bottom--style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-area">
                                    <div className="copy-right-area">
                                        <p className="copyright-text">
                                            &copy; Copyright <Link to="https://www.radiustheme.com/"> e-commerce </Link>
                                            <span className="currentYear"> 2022</span>. All Right Reserved.
                                        </p>
                                    </div>
                                    <div className="payment-area">
                                        <img src="image/gallery/payment.png" alt="payment" width="309" height="26" />
                                    </div>
                                    <ul className="footer-bottom-menu">
                                        <li><Link to="/"> Terms of use</Link></li>
                                        <li><Link to="/"> Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
