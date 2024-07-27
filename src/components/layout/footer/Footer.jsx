import React from 'react'

import './footer.scss'
import { Link, useLocation } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { LuFacebook } from 'react-icons/lu'
import { TbBrandYoutube } from 'react-icons/tb'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {

  let { pathname } = useLocation()

  if (pathname.includes("/sign-in")) return <></>
  if (pathname.includes("/admin")) return <></>

  return (
    <>
      {
        pathname.includes("/cart") || pathname.includes("/contact") 
          ?
          <></>
          :
          <div className="sub-footer">
            <h1>Join Our Newsletter</h1>
            <p>Sign up for deals, new products and promotions</p>
            <form action="">
              <button type='button'><MdOutlineEmail /></button>
              <input type="text" placeholder='Email address' />
              <button>Signup</button>
            </form>
          </div>

      }
      <footer className='footer'>
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
              <FaInstagram />
              <LuFacebook />
              <TbBrandYoutube />
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer