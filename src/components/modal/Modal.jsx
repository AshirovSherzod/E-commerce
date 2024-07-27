import React from 'react'

import './modal.scss'

const Modal = ({ children, setModal }) => {
  return (
    <>
      <div className='modal'>
        {children}
      </div>
      <div onClick={() => setModal(false)} className="overlay"></div>
    </>
  )
}

export default Modal