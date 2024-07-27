import React from 'react'

import './signin.scss'
import img from '../../assets/images/signin.png'
import { useGetValue } from '../../hooks/useGetValue'
import { useDispatch } from 'react-redux'
import { setToken } from '../../context/slices/authSlice'
import { useNavigate } from 'react-router-dom'

let initialState = {
  username: "john32",
  password: "87654321"
}

const SignIn = () => {

  const { formData, handleChange, setFormData } = useGetValue(initialState)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setToken(formData))
    navigate("/admin/manageProducts")
    // if(formData.username === "john32" && formData.password === "87654321") {

    // }
  }

  return (
    <main className='sign-in'>
      <div className="sign-in__left">
        <img src={img} alt="" />
      </div>
      <div className="sign-in__right">
        <form onSubmit={handleSubmit} action="">
          <h1>Sign In</h1>
          <p>Don’t have an accout yet? <span>Sign Up</span></p>
          <input value={formData.username} onChange={(e) => handleChange(e)} name='username' className='input' type="text" placeholder='username' />
          <input value={formData.password} onChange={(e) => handleChange(e)} name='password' className='input' type="text" placeholder='password' />
          <div className="remember">
            <input type="checkbox" />
            <p>Remember Me <span>Forget Password?</span></p>
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </main>
  )
}

export default SignIn