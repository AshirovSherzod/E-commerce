import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

import './admin.scss'

const Admin = () => {
  return (
    <main className='admin'>
      <Sidebar />
      <div className="admin__content">
        <Outlet />
      </div>
    </main>
  )
}

export default Admin