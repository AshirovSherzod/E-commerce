import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isChecked } from '../../../context/slices/cartSlice'

const OrderComplete = () => {

  let checked = useSelector(state => state.cart.checked)
  console.log(checked);
  let navigate = useNavigate()
  let dispatch = useDispatch()



  useEffect(() => {
    if (!checked) {
      return navigate("/cart/checkout")
    }
  }, [])
  return (
    <div className='order-complete'>
      <button onClick={() => {
        dispatch(isChecked(false))
        navigate("/cart/checkout")
      }}>checkout</button>
    </div>
  )
}

export default OrderComplete