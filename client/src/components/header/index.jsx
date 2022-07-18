// External imports
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  // hooks stuff
  const [toggle, setToggle] = useState(false)

  // toggler stuff
  const onToggler = () => {
    setToggle((prevState) => !prevState)
  }

  return (
    <>
      <header className="header header--style-1 sticky-on">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-wrapper">
                <div className="logo">
                  <Link to="/">E-commerce</Link>
                </div>
                <div className="menu-wrap">
                  <ul className="block-menu">
                    <li className="block-menu__item">
                      <NavLink
                        to="/"
                        className={(navInfo) =>
                          navInfo.isActive
                            ? "block-menu__link block-menu__link--active"
                            : "block-menu__link"
                        }
                      >
                        <span className="menu-text">Home</span>
                      </NavLink>
                    </li>
                    <li className="block-menu__item">
                      <NavLink
                        to="about"
                        className={(navInfo) =>
                          navInfo.isActive
                            ? "block-menu__link block-menu__link--active"
                            : "block-menu__link"
                        }
                      >
                        <span className="menu-text">About</span>
                      </NavLink>
                    </li>
                    <li className="block-menu__item">
                      <NavLink
                        to="shop"
                        className={(navInfo) =>
                          navInfo.isActive
                            ? "block-menu__link block-menu__link--active"
                            : "block-menu__link"
                        }
                      >
                        <span className="menu-text">Shop</span>
                      </NavLink>
                    </li>
                    <li className="block-menu__item">
                      <NavLink
                        to="contact"
                        className={(navInfo) =>
                          navInfo.isActive
                            ? "block-menu__link block-menu__link--active"
                            : "block-menu__link"
                        }
                      >
                        <span className="menu-text">Contact</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="menu-actions">
                  <ul className="header-action">
                    <li className="header-action-item item-user">
                      <Link to="/" className="header-action-link">
                        <img src="image/icons/user.svg" alt="user-icon" />
                      </Link>
                    </li>
                    <li className="header-action-item item-favourite">
                      <Link to="/" className="header-action-link">
                        <img
                          src="image/icons/favourite.svg"
                          alt="favourite-icon"
                        />
                      </Link>
                    </li>
                    <li className="header-action-item item-cart">
                      <Link to="/" className="header-action-link">
                        <span className="add-to-bag">
                          <span className="count">0</span>
                          <img
                            src="image/icons/shopping-bag.svg"
                            alt="shopping-bag-icon"
                          />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      <div className="mobile-header mobile-sticky-on">

        <div id="mobile-sticky-placeholder"></div>

        <div className="mobile-top-bar" id="mobile-top-bar">
          <ul className="mobile-top-list">
            <li>
              <i className="far fa-calendar-alt icon"></i>
              <span className="currentDate text">DECEMBER 9, 2022</span>
            </li>
            <li>
              <i className="fas fa-envelope icon"></i>
              <a href="mailto:support@e-commerce.com" className="text">support@e-commerce.com</a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-bar-wrap" id="mobile-menu-bar-wrap">
          <div className="mobile-menu-bar">
            <div className="logo">
              <a href="index.html">
                <img src="image/logo/logo.svg" alt="shop-builder" />
              </a>
            </div>
            <ul className="mobile-menu-actions">
              <li>
                <Link to="/">
                  <span className="icon">
                    <svg width="1.125em" height="1.125em" viewBox="0 0 14 14" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4508 11.4251C13.0996 10.6392 12.5899 9.92541 11.9502 9.32337C11.3125 8.71959 10.557 8.2382 9.72551 7.90578C9.71807 7.90226 9.71062 7.9005 9.70317 7.89698C10.863 7.10553 11.617 5.81633 11.617 4.36181C11.617 1.95226 9.55052 0 7 0C4.44949 0 2.38301 1.95226 2.38301 4.36181C2.38301 5.81633 3.13699 7.10553 4.29683 7.89874C4.28938 7.90226 4.28193 7.90402 4.27449 7.90754C3.44045 8.23995 2.69205 8.71658 2.04977 9.32513C1.41067 9.92763 0.901113 10.6414 0.549245 11.4269C0.203571 12.1959 0.0171405 13.0204 4.65534e-05 13.8558C-0.000450341 13.8745 0.00303479 13.8932 0.0102967 13.9107C0.0175586 13.9282 0.0284503 13.9441 0.04233 13.9576C0.0562097 13.971 0.0727966 13.9817 0.0911133 13.989C0.10943 13.9963 0.129106 14 0.148982 14H1.266C1.34791 14 1.41307 13.9384 1.41493 13.8628C1.45216 12.505 2.02929 11.2334 3.04949 10.2696C4.10507 9.27236 5.50693 8.72362 7 8.72362C8.49308 8.72362 9.89493 9.27236 10.9505 10.2696C11.9707 11.2334 12.5478 12.505 12.5851 13.8628C12.5869 13.9402 12.6521 14 12.734 14H13.851C13.8709 14 13.8906 13.9963 13.9089 13.989C13.9272 13.9817 13.9438 13.971 13.9577 13.9576C13.9715 13.9441 13.9824 13.9282 13.9897 13.9107C13.997 13.8932 14.0005 13.8745 14 13.8558C13.9813 13.0151 13.797 12.1972 13.4508 11.4251ZM7 7.38693C6.14548 7.38693 5.34123 7.07211 4.73619 6.5005C4.13114 5.92889 3.79789 5.1691 3.79789 4.36181C3.79789 3.55452 4.13114 2.79472 4.73619 2.22312C5.34123 1.65151 6.14548 1.33668 7 1.33668C7.85452 1.33668 8.65877 1.65151 9.26381 2.22312C9.86886 2.79472 10.2021 3.55452 10.2021 4.36181C10.2021 5.1691 9.86886 5.92889 9.26381 6.5005C8.65877 7.07211 7.85452 7.38693 7 7.38693Z">
                      </path>
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <span className="mobile-menu-toggle-icon" onClick={onToggler}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className={toggle ? `slide-nav menu-open` : `slide-nav`}>
            <div className="offscreen-navigation">
              <nav className="menu-main-nav">
                <ul className="menu">
                  <li>
                    <NavLink to="/"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="about"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="shop"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="contact"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
      {/* End Mobile Header */}

    </>
  );
};

export default Header;
