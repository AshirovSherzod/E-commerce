import React from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { GoHeart } from 'react-icons/go'
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

import './products.scss'
import regular from '../../assets/icons/star-regular.svg'
import half from '../../assets/icons/star-half.svg'
import solid from '../../assets/icons/star-solid.svg'
import { Link } from 'react-router-dom'


const ProductsItem = ({ data }) => {
    const getRating = (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<img className='products__card-title__rating-img' src={solid} alt="" />);
        }
        if (rating % 1 > 0.4) {
            res.push(<img className='products__card-title__rating-img' src={half} alt="" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<img className='products__card-title__rating-img' src={regular} alt="" />);
        }
        return res;
    };

    return (
        <div className='products__card'>
            <div className="products__card-img">
                <Link to={`details/${data.id}`}>
                    <img src={data.images[1]} alt="" />
                </Link>
                <div className="products__card-img__btns">
                    <button><GoHeart /></button>
                    <button><span><BsCartCheck /></span> Add to Card</button>
                </div>
            </div>
            <div className="products__card-title">
                <p className='products__card-title__rating'>{getRating(data.rating)}</p>
                <h3 title={data.title} className='line-clamp'>{data.title}</h3>
                <div className="products__card-title__price">
                    <p>${data.price}</p>
                    <p>${data.oldPrice}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductsItem

{/* <BsCartCheckFill /> */ }
{/* <GoHeartFill /> */ }