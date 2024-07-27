import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { deleteAllCart, isChecked } from '../../../context/slices/cartSlice'

import './orderComplete.scss'

const OrderComplete = () => {

  let checked = useSelector(state => state.cart.checked)
  let { data } = useOutletContext()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  console.log(checked);

  let month = new Date().getMonth()
  let year = new Date().getFullYear()
  let day = new Date().getDay()

  const handleComplete = () => {
    dispatch(deleteAllCart());
    navigate("/");
  };

  useEffect(() => {
    return () => {
      handleComplete();
    };
  }, []);

  useEffect(() => {
    if (!checked) {
      return navigate("/cart/checkout")
    }
    else {
      console.log("ok");
    }
  }, [])

  let cards = data.map(product => (
    <div className="order-complete__cards-img">
      <img src={product.images[0]} alt="" />
      <sub>2</sub>
    </div>
  ))


  return (
    <div className='order-complete'>
      <h3>Thank you! 🎉</h3>
      <h1>Your order has been received</h1>
      <div className="order-complete__cards">
        {cards}
      </div>
      <div className="order-complete__desc">
        <p><span>Date:</span> {day < 10 ? `0${day}` : day}.{month < 10 ? `0${month}` : month}.{year}</p>
        <p><span>Total:</span>  $123.000</p>
        <p><span>Payment Method:</span> Credit Card</p>
      </div>
      <button onClick={() => {
        // dispatch(isChecked(false))
        // navigate("/cart/checkout")
      }}>checkout</button>
    </div>
  )
}

export default OrderComplete