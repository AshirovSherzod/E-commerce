import React from 'react'

import './cheackout.scss'

const Checkout = ({ data, setAbtab }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setAbtab(3)
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
            <select placeholder="Country" className='checkout__left-address__input' name="Country" id="">
              <option value="">Country</option>
              <option value="">Country</option>
              <option value="">Country</option>
            </select>
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
      <div className="cheackout__right">
        <h1>salom</h1>
      </div>
    </div>
  )
}

export default Checkout