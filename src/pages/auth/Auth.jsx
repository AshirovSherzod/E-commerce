import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  let isLogin = useSelector(state => state.auth.token)
  console.log(isLogin);
  return isLogin === "qwertyASDsdfQSXbhjiWDCFghjk1223qwsdc2" ? <Outlet /> : <Navigate replace to={"/sign-in"} />
}

export default Auth