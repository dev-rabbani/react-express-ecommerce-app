// External imports
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
    </>
  );
};

export default Header;
