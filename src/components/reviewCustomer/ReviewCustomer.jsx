import React, { memo } from 'react'
import { COMMENTS_DATA } from '../../static'

import './reviewCustomer.scss'
import solid from '../../assets/icons/star-solid.svg'


const ReviewCustomer = () => {

    let comments = COMMENTS_DATA.map(comment => (
        <div key={comment.id} className="review-customer__comment">
            <div className="review-customer__comment__img">
                <img src={comment.image} alt="" />
            </div>
            <div className="review-customer__comment__title">
                <h1>{comment.name}</h1>
                <p>{comment.comment}</p>
            </div>
        </div>
    ))

    return (
        <div className='review-customer'>
            <div className="review-customer__top">
                <div className="title">
                    <h1>Customer Reviews</h1>
                    <div className="stars">
                        <img src={solid} alt="" />
                        <img src={solid} alt="" />
                        <img src={solid} alt="" />
                        <img src={solid} alt="" />
                        <img src={solid} alt="" />
                        <span>11 Review</span>
                    </div>
                </div>
                <form action="">
                    <input type="text" />
                    <button>Write Review</button>
                </form>
            </div>
            <div className="review-customer__comments">
                {comments}
            </div>
        </div>
    )
}

export default memo(ReviewCustomer)