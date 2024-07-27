import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'
import img from '../../assets/images/wishlist.webp'


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
                    <Empty img={img} />
            }
        </main>
    )
}

export default Wishlist