import React from 'react'

import './cheackout.scss'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isChecked } from '../../../context/slices/cartSlice'
import { useGetValue } from '../../../hooks/useGetValue'

let initialState = {
  fname: "Hamraqulov",
  lname: "Asadbek",
  phone: "+988906784523",
  email: "qwertasd.sd@gmail.com",
  address: "wolt street4",
  country: "Uzbekistan",
  city: "Pop",
  card: "4323 4567 6787 7834"
}

const BOT_TOKEN = "7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc"
const CHAT_ID = "-4216348753"


const Checkout = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let { data } = useOutletContext()
  const { formData, handleChange, setFormData } = useGetValue(initialState)

  let cards = data.map(product => (
    <div key={product.id} className="checkout__right-card">
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

    let text = 'Mijoz malumotlari: %0A%0A'
    text += `Ismi:  ${formData.fname} ${formData.lname} %0A`
    text += `Email:  ${formData.email} %0A`
    text += `Address:   ${formData.country} ${formData.city} ${formData.address} %0A`
    text += `Phone number:   ${formData.phone} %0A`
    text += `Card number:   ${formData.card} %0A`

    text += `Sotib olgan mahsulotlar: %0A%0A`
    text += data.map(product => (
      `
        Mahsulot nomi: ${product.title} %0A
        Mahsulot soni: ${3} %0A
        Mahsulot narxi: ${product.price} %0A
        Umumiy summa: ${234.000} %0A%0A
      `
    ))
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()


    dispatch(isChecked(true))
    navigate("/cart/orderComplete")
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
                <input value={formData.fname} onChange={(e) => handleChange(e)} name='fname' type="text" placeholder='First name' required />
              </div>
              <div className="checkout__left-info__name-first">
                <label htmlFor="">LAST NAME *</label>
                <input value={formData.lname} onChange={(e) => handleChange(e)} name='lname' type="text" placeholder='Last name' required />
              </div>
            </div>
            <div className="checkout__left-info__input">
              <label htmlFor="">PHONE NUMBER *</label>
              <input value={formData.phone} onChange={(e) => handleChange(e)} name='phone' type="text" placeholder='Phone number' required />
            </div>
            <div className="checkout__left-info__input">
              <label htmlFor="">EMAIL ADDRESS *</label>
              <input value={formData.email} onChange={(e) => handleChange(e)} name='email' type="text" placeholder='Phone number' required />
            </div>
          </div>
          <div className="checkout__left-address">
            <h2>Shipping Address</h2>
            <div className="checkout__left-address__input">
              <label htmlFor="">STREET ADDRESS *</label>
              <input value={formData.address} onChange={(e) => handleChange(e)} name='address' type="text" placeholder='Street address' required />
            </div>
            <div className="checkout__left-address__input">
              <label htmlFor="">Country</label>
              <input value={formData.fname} onChange={(e) => handleChange(e)} name='fname' type="text" placeholder='Country address' required />
            </div>
            <div className="checkout__left-address__input">
              <label htmlFor="">TOWN/CITY *</label>
              <input value={formData.city} onChange={(e) => handleChange(e)} name='city' type="text" placeholder='Town/City' required />
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
              <input value={formData.card} onChange={(e) => handleChange(e)} name='card' type="text" placeholder='1234 5678 8912 3456' />
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
        <div className="checkout__right-total">
          <p>Shipping <span>Free</span></p>
          <p>Subtotal <span>$99.0</span></p>
          <h3>Total <span>$234.00</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Checkout