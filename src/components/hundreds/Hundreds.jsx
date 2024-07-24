import React, { memo } from 'react'

import './hundreds.scss'
import img from '../../assets/images/hundreds-img.png'
import { BsArrowRight } from 'react-icons/bs'

const Hundreds = () => {
    return (
        <section className='hundreds'>
            <div className="hundreds__img">
                <img src={img} alt="" />
            </div>
            <div className="hundreds__right">
                <h3>SALE UP TO 35% OFF</h3>
                <h1>HUNDREDS of <br /> New lower prices!</h1>
                <p>It’s more affordable than ever to give every <br /> room in your home a stylish makeover</p>
                <button>Show More <BsArrowRight /></button>
            </div>
        </section>
    )
}

export default memo(Hundreds)