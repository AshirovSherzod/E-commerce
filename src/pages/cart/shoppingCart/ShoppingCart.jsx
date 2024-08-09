import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

import './shoppingCart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementCart, removeFromCart } from '../../../context/slices/cartSlice'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa'

const formatter = Intl.NumberFormat('en')

const ShoppingCart = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()
    let { data } = useOutletContext()
    const [price, setPrice] = useState(0)
    let cartData = useSelector(state => state.cart.value)
    console.log(data);


    let carts = data.map(el => (
        <tr>
            <td>
                <div className="shopping-cart__cart">
                    <div className="shopping-cart__cart-img">
                        <img width={100} src={el.images[0]} alt="" />
                    </div>
                    <div className="shopping-cart__cart-title">
                        <h3 className='line-clamp'>{el.title}</h3>
                        <button className='remove' onClick={() => dispatch(removeFromCart(el.id))}><IoClose /></button>
                        <div className="shopping-cart__cart-counter">
                            <button onClick={() => dispatch(addToCart(el))}>{<FaPlus />}</button>
                            <button>{el.stock}</button>
                            <button onClick={() => dispatch(decrementCart(el))}><FaMinus /></button>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="shopping-cart__cart-counter">
                    <button onClick={() => dispatch(addToCart(el))}>{<FaPlus />}</button>
                    <button>{el.stock}</button>
                    <button onClick={() => dispatch(decrementCart(el))}><FaMinus /></button>
                </div>
            </td>
            <td>{el.price}</td>
            <td>
                {formatter.format(el.price * el.stock)}
                <button className='remove-two' onClick={() => dispatch(removeFromCart(el.id))}><IoClose /></button>
            </td>
        </tr>
    ))

    return (
        <div className='shopping-cart'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {carts}
                </tbody>
            </table>
            <div className="shopping-cart__right">
                <h2>Cart summary</h2>
                <form action="">
                    <div className="shopping-cart__right-input">
                        <input type="radio" />
                        <label htmlFor="">Free shipping <span>$0.00</span></label>
                    </div>
                    <div className="shopping-cart__right-input">
                        <input type="radio" />
                        <label htmlFor="">Express shipping <span>+$15.00</span></label>
                    </div>
                    <div className="shopping-cart__right-input">
                        <input type="radio" />
                        <label htmlFor="">Pick Up <span>%21.00</span></label>
                    </div>
                </form>
                <div className="shopping-cart__right-total">
                    <p>Subtotal <span>$1234.0</span></p>
                    <h3>Total <span>{price}</span></h3>
                </div>
                <button className='checkoutt' onClick={() => {
                    navigate("/cart/checkout")
                }}>Checkout</button>
            </div >

        </div >
    )
}

export default ShoppingCart