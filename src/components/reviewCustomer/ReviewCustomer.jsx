import { memo } from "react";
import { COMMENTS_DATA } from "../../static";

import "./reviewCustomer.scss";
import solid from "../../assets/icons/star-solid.svg";

const ReviewCustomer = () => {
  const comments = COMMENTS_DATA.map((comment) => (
    <div key={comment.id} className="review-customer__comment">
      <div className="review-customer__comment__img">
        <img src={comment.image} alt={comment.name} />
      </div>
      <div className="review-customer__comment__title">
        <h1>{comment.name}</h1>
        <p>{comment.comment}</p>
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission
  };

  return (
    <div className="review-customer">
      <div className="review-customer__top">
        <div className="title">
          <h1>Customer Reviews</h1>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={solid} alt="star" />
            ))}
            <span>11 Review</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="review-input" className="sr-only">
            Write a review
          </label>
          <input id="review-input" type="text" placeholder="Write your review..." />
          <button type="submit">Write Review</button>
        </form>
      </div>
      <div className="review-customer__comments">{comments}</div>
    </div>
  );
};

export default memo(ReviewCustomer);
