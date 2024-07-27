import React from 'react'

import './productBottom.scss'
import { CiDeliveryTruck, CiLock, CiMoneyCheck1 } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'

const ProductBottom = () => {
    return (
        <div className="products__bottom container">
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
    )
}

export default ProductBottom