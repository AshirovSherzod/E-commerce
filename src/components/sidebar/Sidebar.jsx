import React from 'react'

import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { GoArrowLeft } from 'react-icons/go'
import { CiLogout } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import { logout } from '../../context/slices/authSlice'

const Sidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <Link className='dashboard' to={"/"}><GoArrowLeft /> Admin Dashboard</Link>

      <div className="sidebar__links">
        <NavLink to={"manageProducts"}><MdOutlineDashboardCustomize /> Manage Products</NavLink>
        <NavLink to={"manageCategory"}><MdOutlineDashboardCustomize /> Manage Category</NavLink>
      </div>
      <button onClick={() => dispatch(logout())}><CiLogout /> Log Out</button>

    </div>
  )
}

export default Sidebar