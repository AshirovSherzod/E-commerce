import React from 'react'

import './cheackout.scss'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isChecked } from '../../../context/slices/cartSlice'

const Checkout = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let { data } = useOutletContext()


  let cards = data.map(product => (
    <div className="checkout__right-card">
      <div className="checkout__right-card__img">
        <img src={product?.images[0]} alt="" />
      </div>
      <div className="checkout__right-card__content">
        <div className="checkout__right-card__content-title">
          <h3 title={product.title} className='line-clamp'>{product?.title}</h3>
          <button>Counter</button>
        </div>
        <p>${product.price}</p>
      </div>
    </div>
  ))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(isChecked(true))
    navigate("/cart/orderComplete")
    // setAbtab(3)
  }

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <form onSubmit={handleSubmit} action="">
          <div className="checkout__left-info">
            <h2>Contact Information</h2>
            <div className="checkout__left-info__name">
              <div className="checkout__left-info__name-first">
                <label htmlFor="">FIRST NAME *</label>
                <input type="text" placeholder='First name' required />
              </div>
              <div className="checkout__left-info__name-first">
                <label htmlFor="">LAST NAME *</label>
                <input type="text" placeholder='Last name' required />
              </div>
            </div>
            <div className="checkout__left-info__input">
              <label htmlFor="">PHONE NUMBER *</label>
              <input type="text" placeholder='Phone number' required />
            </div>
            <div className="checkout__left-info__input">
              <label htmlFor="">EMAIL ADDRESS</label>
              <input type="text" placeholder='Phone number' />
            </div>
          </div>
          <div className="checkout__left-address">
            <h2>Shipping Address</h2>
            <div className="checkout__left-address__input">
              <label htmlFor="">STREET ADDRESS *</label>
              <input type="text" placeholder='Street address' required />
            </div>
            <div className="checkout__left-address__input">
              <label htmlFor="">Country</label>
              <input type="text" placeholder='Country address' required />
            </div>
            <div className="checkout__left-address__input">
              <label htmlFor="">TOWN/CITY</label>
              <input type="text" placeholder='Town/City' />
            </div>
          </div>
          <div className="checkout__left-payment">
            <h2>Payment Method</h2>
            <div className="checkout__left-payment__creditcard">
              <input type="radio" />
              <p>Pay by Card Credit</p>
            </div>
            <div className="checkout__left-payment__creditcard">
              <input type="radio" />
              <p>PayPal</p>
            </div>
            <div className="checkout__left-payment__cardnumber">
              <label htmlFor="">CARD NUMBER</label>
              <input type="text" placeholder='1234 5678 8912 3456' />
            </div>
          </div>
          <button>Place Order</button>
        </form>
      </div>
      <div className="checkout__right">
        <h1>Order Summary</h1>
        {cards}
        <form action="">
          <input type="text" placeholder='Input' />
          <button>Apply</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout