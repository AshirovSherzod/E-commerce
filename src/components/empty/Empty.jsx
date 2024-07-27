import React from 'react'

import './empty.scss'

const Empty = ({ img }) => {
    return (
        <div className="empty">
            <img src={img} alt="" />
        </div>
    )
}

export default Empty