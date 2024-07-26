import React from 'react'
import { IoClose } from 'react-icons/io5'

import './shoppingCart.scss'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../context/slices/cartSlice'
import { useNavigate, useOutletContext } from 'react-router-dom'

const ShoppingCart = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()
    let { data } = useOutletContext()


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
                        <button>Counter</button>
                    </div>
                </div>
            </td>
            <td>
                <button>Counter</button>
            </td>
            <td>{el.price}</td>
            <td>
                {el.price}
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
                    <h3>Total <span>$1234.0</span></h3>
                </div>
                <button className='checkoutt' onClick={() => {
                    // setAbtab(2)
                    // localStorage.setItem("abtab", JSON.stringify(2))
                    navigate("/cart/checkout")
                }}>Checkout</button>
            </div>

        </div>
    )
}

export default ShoppingCart