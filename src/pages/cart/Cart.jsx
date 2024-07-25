import React, { useState } from 'react'

import './cart.scss'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'
import { MdDone } from 'react-icons/md'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
import Checkout from '../../components/checkout/Checkout'
import OrderComplete from '../../components/orderComplete/OrderComplete'

const Cart = () => {

  const cartData = useSelector(state => state.cart.value)
  const [abtab, setAbtab] = useState(1)
  console.log(cartData);

  return (
    <main className='cart container'>
      {
        cartData.length
          ?
          <>
            <div className="cart__header">
              <h1>Cart</h1>
              <div className="cart__header-tabs">
                <div className={`cart__header-tabs__one ${abtab === 1 ? "active" : ""} ${abtab > 1 ? "done" : ""}`}>
                  <div className={`cart__header-tabs__one-icon ${abtab === 1 ? "active" : ""} ${abtab > 1 ? "done" : ""}`}>
                    {
                      abtab > 1
                        ?
                        <MdDone />
                        :
                        1
                    }
                  </div>
                  <h2>Shopping cart</h2>
                </div>
                <div className={`cart__header-tabs__two ${abtab === 2 ? "active" : ""} ${abtab > 2 ? "done" : ""}`}>
                  <div className={`cart__header-tabs__two-icon ${abtab === 2 ? "active" : ""} ${abtab > 2 ? "done" : ""}`}>
                    {
                      abtab > 2
                        ?
                        <MdDone />
                        :
                        2
                    }
                  </div>
                  <h2>Checkout details</h2>
                </div>
                <div className={`cart__header-tabs__three ${abtab === 3 ? "active" : ""} ${abtab > 3 ? "done" : ""}`}>
                  <div className={`cart__header-tabs__three-icon ${abtab === 3 ? "active" : ""} ${abtab > 3 ? "done" : ""}`}>
                    {
                      abtab > 3
                        ?
                        <MdDone />
                        :
                        3
                    }
                  </div>
                  <h2>Order Complete</h2>
                </div>
              </div>
            </div>
            <div className="cart__body">
              {
                abtab === 1
                  ?
                  <ShoppingCart data={cartData} setAbtab={setAbtab} />
                  :
                  abtab === 2
                    ?
                    <Checkout data={cartData} setAbtab={setAbtab} />
                    :
                    abtab === 3
                      ?
                      <OrderComplete />
                      :
                      <></>
              }
            </div>
          </>
          :
          <Empty title={"Salom"} />
      }
    </main>
  )
}

export default Cart