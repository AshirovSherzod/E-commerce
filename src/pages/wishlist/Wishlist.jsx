import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'

const Wishlist = () => {

    const wishlistData = useSelector(state => state.wishlist.value)

    const title = <>The products you liked are here, <br /> but they are currently empty</>

    return (
        <main className='wishlist container'>
            {
                wishlistData.length
                    ?
                    <Products data={wishlistData} />
                    :
                    <Empty title={title} />
            }
        </main>
    )
}

export default Wishlist