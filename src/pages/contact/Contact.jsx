import React from 'react'

import './contact.scss'
import Hundreds from '../../components/hundreds/Hundreds'
import ProductBottom from '../../components/productBottom/ProductBottom'
import { BsShop } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { useGetValue } from '../../hooks/useGetValue'

const initialState = {
  fullname: "",
  email: "",
  message: "",
}

const BOT_TOKEN = "7398728173:AAFBRewLYedKk8QzPkuPgic1W3Tt6mv4rzc"
const CHAT_ID = "-4216348753"

const Contact = () => {

  const { formData, handleChange, setFormData } = useGetValue(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    let text = 'Xabar: %0A%0A'
    text += `Ismi:  ${formData.fullname} %0A`
    text += `Email:  ${formData.email} %0A`
    text += `Xabar:   ${formData.message} %0A`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    formData.fullname = ""
    formData.email = ""
    formData.message = ""
  }

  return (
    <main className='contact '>
      <section className="contact__title container">
        <h1>We believe in sustainable <br /> decor. We’re passionate about <br /> life at home.</h1>
        <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which  can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations,  faithful to the shapes of each period, with a touch of the present</p>
      </section>
      <section className='container'>
        <Hundreds />
      </section>
      <section className='contact__contacts container'>
        <h1>Contact Us</h1>
        <div className="contact__contacts-cards">
          <div className="contact__contacts-card">
            <BsShop />
            <h3>Address</h3>
            <p>234 Hai Trieu, Ho Chi Minh City,
              Viet Nam</p>
          </div>
          <div className="contact__contacts-card">
            <FiPhone />
            <h3>Contact Us</h3>
            <p>+84 234 567 890</p>
          </div>
          <div className="contact__contacts-card">
            <HiOutlineMail />
            <h3>Email</h3>
            <p>hello@3legant.com</p>
          </div>
        </div>
      </section>
      <section className="contact__form container">
        <div className="contact__form__left">
          <form onSubmit={handleSubmit} action="">
            <div className="contact__form__left-input">
              <label htmlFor="">FULL NAME</label>
              <input value={formData.fullname} onChange={(e) => handleChange(e)} name='fullname' type="text" placeholder='Full name' required />
            </div>
            <div className="contact__form__left-input">
              <label htmlFor="">EMAIL</label>
              <input value={formData.email} onChange={(e) => handleChange(e)} name='email' type="text" placeholder='Full name' required />
            </div>
            <div className="contact__form__left-input">
              <label htmlFor="">MESSAGE</label>
              <textarea value={formData.message} onChange={(e) => handleChange(e)} name='message' placeholder='your message' id="" required></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact__form__right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9663861377044!2d68.02922067640615!3d40.52023404933273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ad7bf60a0e6dff%3A0xb3a88d3b69714cd0!2s1-maktab!5e0!3m2!1sen!2s!4v1722074505861!5m2!1sen!2s" ></iframe>
        </div>
      </section>
      <section className='contact__bottom'>
        <ProductBottom />
      </section>
    </main>
  )
}

export default Contact

// width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"