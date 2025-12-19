import "./footer.scss";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { TbBrandYoutube } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.includes("/sign-in")) return null;
  if (pathname.includes("/admin")) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <>
      {pathname.includes("/cart") || pathname.includes("/contact") ? null : (
        <div className="sub-footer">
          <h1>Join Our Newsletter</h1>
          <p>Sign up for deals, new products and promotions</p>
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <button type="button" aria-label="Email icon">
              <MdOutlineEmail />
            </button>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              required
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
      <footer className="footer">
        <div className="footer__wrapper container">
          <div className="footer__top">
            <div className="footer__top-left">
              <h1>3legant</h1>
              <p>Gift & Decoration Store</p>
            </div>
            <div className="footer__top-right">
              <Link to={"/"}>Home</Link>
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/#"}>Product</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-left">
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <div className="footer__bottom-left__hidden">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>
            <div className="footer__bottom-right">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <LuFacebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <TbBrandYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
