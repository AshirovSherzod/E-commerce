import React from 'react'

import './empty.scss'
import img from '../../assets/images/empty.png'

const Empty = ({ title }) => {
    return (
        <div className="empty">
            <h1>{title}</h1>
            <img src={img} alt="" />
        </div>
    )
}

export default Empty