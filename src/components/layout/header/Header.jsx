import { useState } from "react";

import "./header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoArrowRight, GoHeart } from "react-icons/go";
import { MdKeyboardArrowRight, MdOutlineAccountCircle } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    setShowSearch(false);
  };

  if (pathname.includes("/sign-in")) return null;
  if (pathname.includes("/admin")) return null;

  return (
    <>
      <div className="sub-header">
        <p>30% off storewide — Limited time!</p>
        <Link to="/shop">
          Shop Now <GoArrowRight />
        </Link>
      </div>
      <header className="header container">
        <nav className="nav ">
          <div className="nav__logo">
            <button
              onClick={() => setShowSidebar(true)}
              className="nav__logo-burger"
            >
              <RxHamburgerMenu />
            </button>
            <h1>
              <Link to={"/"}>3legant</Link>
            </h1>
          </div>
          <div className="nav__middle">
            <div
              className={`nav__middle-links ${
                showSidebar ? "nav__middle-links__show" : ""
              }`}
            >
              {showSidebar ? (
                <div className="nav__middle-links__show-header">
                  <h3>3legant</h3>
                  <button onClick={() => setShowSidebar(false)}>
                    <IoClose />
                  </button>
                </div>
              ) : null}
              <NavLink onClick={() => setShowSidebar(false)} to="/">
                Home{showSidebar && (
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                )}
              </NavLink>
              <NavLink onClick={() => setShowSidebar(false)} to="/shop">
                Shop{showSidebar && (
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                )}
              </NavLink>
              <NavLink onClick={() => setShowSidebar(false)} to="/blog">
                Blog{showSidebar && (
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                )}
              </NavLink>
              <NavLink onClick={() => setShowSidebar(false)} to="/contact">
                Contact Us{showSidebar && (
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                )}
              </NavLink>
              {showSidebar && (
                <div className="nav__middle-links__show-bottom">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/cart/shopping"
                  >
                    Cart{" "}
                    <span>
                      <CgShoppingBag />
                    </span>
                  </Link>
                  <Link onClick={() => setShowSidebar(false)} to="/wishlist">
                    Wishlist{" "}
                    <span>
                      <GoHeart />
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      navigate("/admin/manageProducts");
                      setShowSidebar(false);
                    }}
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="nav__bottom">
            <button type="button" onClick={() => setShowSearch(true)}>
              <RiSearchLine />
            </button>
            <NavLink className="hide" to="/admin/manageProducts" aria-label="Account">
              <MdOutlineAccountCircle />
            </NavLink>
            <NavLink to="/cart/shopping" aria-label="Shopping cart">
              <CgShoppingBag />
            </NavLink>
            <NavLink className="hide" to="/wishlist" aria-label="Wishlist">
              <GoHeart />
            </NavLink>
          </div>
        </nav>
        {showSidebar && (
          <div onClick={() => setShowSidebar(false)} className="overlay"></div>
        )}

        {showSearch && (
          <div className="search__form">
            <div className="search__form__wrapper container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="search-input" className="sr-only">
                  Search products
                </label>
                <input
                  id="search-input"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Something"
                />
                <button type="submit">Search</button>
              </form>
              <button type="button" onClick={() => setShowSearch(false)}>
                Hide Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
