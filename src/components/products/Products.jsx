import React from 'react'
import ProductsItem from './ProductsItem'

import './products.scss'
import { BsArrowRight } from 'react-icons/bs'
import { CiDeliveryTruck, CiLock, CiMoneyCheck1 } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

const Products = ({ data, isLoading, isSuccess }) => {

    let { pathname } = useLocation()

    let products = data?.map(product => (
        <ProductsItem key={product.id} data={product} />
    ))

    return (
        <div className='products container'>
            {
                pathname.includes("/wishlist") || pathname.includes("/shop")
                    ?
                    <></>
                    :
                    <div className="products__top">
                        <h1>New Arrivals</h1>
                        <p>More products <BsArrowRight /></p>
                    </div>
            }
            <div className="products__cards">
                {products}
            </div>
            {
                pathname.includes("/wishlist") || pathname.includes("/shop")
                    ?
                    <></>
                    :
                    <div className="products__bottom">
                        <div className="products__bottom__card">
                            <CiDeliveryTruck />
                            <h2>Free Shipping</h2>
                            <p>Order above $200</p>
                        </div>
                        <div className="products__bottom__card">
                            <CiMoneyCheck1 />
                            <h2>Money-back</h2>
                            <p>30 days guarantee</p>
                        </div>
                        <div className="products__bottom__card">
                            <CiLock />
                            <h2>Secure Payments</h2>
                            <p>Secured by Stripe</p>
                        </div>
                        <div className="products__bottom__card">
                            <FiPhone />
                            <h2>24/7 Support</h2>
                            <p>Phone and Email support</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Products