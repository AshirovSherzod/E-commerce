import React, { useState } from 'react'

import './cart.scss'
import { useSelector } from 'react-redux'
import Empty from '../../components/empty/Empty'
import { MdDone } from 'react-icons/md'
import ShoppingCart from './shoppingCart/ShoppingCart'
import Checkout from './checkout/Checkout'
import OrderComplete from './orderComplete/OrderComplete'
import { Outlet, useLocation } from 'react-router-dom'

const Cart = () => {

  const cartData = useSelector(state => state.cart.value)
  // const [abtab, setAbtab] = useState(1)
  const pathnames = ["shopping", "checkout", "orderComplete"]
  let { pathname } = useLocation()
  pathname = pathname.split("/")[2]
  let index = pathnames.findIndex(text => text === pathname)

  let abtab1 = localStorage.getItem("abtab")
  console.log(abtab1);

  return (
    <main className='cart container'>
      {
        cartData.length
          ?
          <>
            <div className="cart__header">
              <h1>Cart</h1>
              <div className="cart__header-tabs">
                <div className={`cart__header-tabs__one ${index === 0 ? "active" : ""} ${index > 0 ? "done" : ""}`}>
                  <div className={`cart__header-tabs__one-icon ${index === 0 ? "active" : ""} ${index > 0 ? "done" : ""}`}>
                    {
                      index > 0
                        ?
                        <MdDone />
                        :
                        1
                    }
                  </div>
                  <h2>Shopping cart</h2>
                </div>
                <div className={`cart__header-tabs__two ${index === 1 ? "active" : ""} ${index > 1 ? "done" : ""}`}>
                  <div className={`cart__header-tabs__two-icon ${index === 1 ? "active" : ""} ${index > 1 ? "done" : ""}`}>
                    {
                      index > 1
                        ?
                        <MdDone />
                        :
                        2
                    }
                  </div>
                  <h2>Checkout details</h2>
                </div>
                <div className={`cart__header-tabs__three ${index === 2 ? "active" : ""}`}>
                  <div className={`cart__header-tabs__three-icon ${index === 2 ? "active" : ""}`}>
                    {
                      index > 2
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
              <Outlet context={{ data: cartData }} />
              {/* {
                abtab === 1
                  ?
                  <ShoppingCart data={cartData} setAbtab={setAbtab} />
                  :
                  abtab === 2
                    ?
                    <Checkout data={cartData} setAbtab={setAbtab} />
                    :
                     ${abtab1 > 3 ? "done" : ""}
                    abtab === 3
                      ?
                      <OrderComplete />
                      :
                      <></>
              } */}
            </div>
          </>
          :
          <Empty title={"Salom"} />
      }
    </main>
  )
}

export default Cart