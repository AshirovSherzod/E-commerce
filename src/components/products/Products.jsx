import ProductsItem from './ProductsItem'
import './products.scss'
import { BsArrowRight } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import ProductBottom from '../productBottom/ProductBottom'
import PropTypes from 'prop-types'

const Products = ({ data, isLoading, limit }) => {
    const { pathname } = useLocation()

    const pathAdmin = pathname.includes("/admin")

    const products = data?.map(product => (
        <ProductsItem key={product.id} data={product} />
    ))

    const loading = (limit) => {
        const arr = []
        for (let i = 0; i < limit; i++) {
            arr.push(
                <div key={i} className="products__loading-card">
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

Products.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    limit: PropTypes.number
}

export default Products