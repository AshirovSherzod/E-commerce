import React from 'react'
import ProductsItem from './ProductsItem'

import './products.scss'
import { BsArrowRight } from 'react-icons/bs'
import { CiDeliveryTruck, CiLock, CiMoneyCheck1 } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import ProductBottom from '../productBottom/ProductBottom'

const Products = ({ data, isLoading, isSuccess, limit }) => {

    let { pathname } = useLocation()

    let pathAdmin = pathname.includes("/admin")

    let products = data?.map(product => (
        <ProductsItem key={product.id} data={product} />
    ))

    const loading = (limit) => {
        let arr = []
        for (let i = 0; i < limit; i++) {
            arr.push(
                <div className="products__loading-card">
                    <div className="products__loading-card__img"></div>
                    <div className="products__loading-card__title">
                        <div className="products__loading-card__title-desc"></div>
                        <div className="products__loading-card__title-desc"></div>
                        <div className="products__loading-card__title-desc"></div>
                    </div>
                </div>
            )
        }

        return arr
    }


    return (
        <div className={`products ${pathAdmin ? "admin" : ""}`}>
            {
                pathname.includes("/wishlist") || pathname.includes("/shop") || pathAdmin
                    ?
                    <></>
                    :
                    <div className="products__top container">
                        <h1>New Arrivals</h1>
                        <p>More products <BsArrowRight /></p>
                    </div>
            }
            {
                pathAdmin
                    ?
                    isLoading
                        ?
                        <div className="products__loading-admin">
                            {loading(limit)}
                        </div>
                        :
                        <div className="products__cards-admin">
                            {products}
                        </div>
                    :
                    isLoading
                        ?
                        <div className="products__loading container">
                            {loading(limit)}
                        </div>
                        :
                        <div className="products__cards container">
                            {products}
                        </div>

            }
            {
                pathname.includes("/wishlist") || pathname.includes("/shop") || pathname.includes("/admin")
                    ?
                    <></>
                    :
                    <ProductBottom />
            }
        </div>
    )
}

export default Products