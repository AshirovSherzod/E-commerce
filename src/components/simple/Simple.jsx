import React from 'react'
import { GoArrowRight } from 'react-icons/go'

import './simple.scss'
import first from '../../assets/images/simple/1.png'
import second from '../../assets/images/simple/2.png'
import third from '../../assets/images/simple/3.png'


const Simple = () => {
    return (
        <section className='simple container'>
            <div className="simple__card card-1">
                <div className="simple__card-img">
                    <img src={first} alt="" />
                    <div className="simple__card-title">
                        <h3>Living Room</h3>
                        <button>Shop Now <span><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>
            <div className="simple__card card-2">
                <div className="simple__card-img">
                    <img src={second} alt="" />
                    <div className="simple__card-title">
                        <h3>Bedroom</h3>
                        <button>Shop Now <span><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>
            <div className="simple__card card-3">
                <div className="simple__card-img">
                    <img src={third} alt="" />
                    <div className="simple__card-title">
                        <h3>Kitchen</h3>
                        <button>Shop Now <span><GoArrowRight /></span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Simple