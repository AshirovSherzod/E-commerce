import React, { useState } from 'react'

import './header.scss'
import { Link, NavLink } from 'react-router-dom'
import { GoArrowRight } from 'react-icons/go'
import { MdKeyboardArrowRight, MdOutlineAccountCircle } from 'react-icons/md'
import { CgShoppingBag } from 'react-icons/cg'
import { RiSearchLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'


const Header = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>

            <div className='sub-header'>
                <p>30% off storewide — Limited time!</p>
                <Link to={"#"}>Shop Now <GoArrowRight /></Link>
            </div>
            <header className='header'>
                <nav className='nav container'>
                    <div className="nav__logo">
                        <button onClick={() => setShowSidebar(true)} className="nav__logo-burger"><RxHamburgerMenu /></button>
                        <h1><Link to={"/"}>3legant</Link></h1>
                    </div>
                    <div className="nav__middle">
                        <div className={`nav__middle-links ${showSidebar ? "nav__middle-links__show" : ""}`}>
                            {
                                showSidebar ? <button onClick={() => setShowSidebar(false)}><IoClose /></button> : <></>
                            }
                            <NavLink onClick={() => setShowSidebar(false)} to={"/"}>Home {showSidebar ? <span><MdKeyboardArrowRight /></span> : <></>}</NavLink>
                            <NavLink onClick={() => setShowSidebar(false)} to={"/shop"}>Shop {showSidebar ? <span><MdKeyboardArrowRight /></span> : <></>}</NavLink>
                            <NavLink onClick={() => setShowSidebar(false)} to={"/blog"}>Blog {showSidebar ? <span><MdKeyboardArrowRight /></span> : <></>}</NavLink>
                            <NavLink onClick={() => setShowSidebar(false)} to={"/contact"}>Contact Us {showSidebar ? <span><MdKeyboardArrowRight /></span> : <></>}</NavLink>
                        </div>
                    </div>
                    <div className="nav__bottom">
                        <form action="">
                            <button><RiSearchLine /></button>
                        </form>
                        <NavLink to={"/admin"}><MdOutlineAccountCircle /></NavLink>
                        <NavLink to={"/cart"}><CgShoppingBag /></NavLink>
                    </div>
                </nav>
                {
                    showSidebar
                        ?
                        <div onClick={() => setShowSidebar(false)} className="overlay"></div>
                        :
                        <></>
                }
            </header>
        </>
    )
}

export default Header