import React from 'react'
import { BsCartCheck, BsCartCheckFill } from 'react-icons/bs'
import { GoHeart, GoHeartFill } from 'react-icons/go'
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

import './products.scss'
import { Link } from 'react-router-dom'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../context/slices/cartSlice'
import { like } from '../../context/slices/wishlistSlice'


const ProductsItem = ({ data }) => {

    const wishlistData = useSelector(state => state.wishlist.value)
    const cartData = useSelector(state => state.cart.value)


    const dispatch = useDispatch()

    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<IoMdStar />);
        }
        if (rating % 1 > 0.4) {
            res.push(<IoMdStarHalf />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<IoMdStarOutline />)
        }
        return res;
    };

    return (
        <div className='products__card'>
            <div className="products__card__img">
                <Link to={`details/${data.id}`}>
                    <img src={data.images[0]} alt="" />
                </Link>
                <button onClick={() => dispatch(like(data))} className='heart'>
                    {wishlistData.some((el) => el.id === data.id) ? (
                        <GoHeartFill color="crimson" />
                    ) : (
                        <GoHeart />
                    )}
                </button>
                <button onClick={() => dispatch(addToCart(data))} className='addtocart'>
                    {cartData.some((el) => el.id === data.id) ? (
                       <> <BsCartCheckFill /> Add to Card</>
                    ) : (
                        <><BsCartCheck /> Add to Card</>
                    )}</button>
            </div>
            <div className="products__card__title">
                <p className='products__card__title-rating'>{getRating(data.rating)}</p>
                <h3 title={data.title} className='line-clamp'>{data.title}</h3>
                <div className="products__card__title-price">
                    <p>${data.price}</p>
                    <p>${data.oldPrice}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductsItem
