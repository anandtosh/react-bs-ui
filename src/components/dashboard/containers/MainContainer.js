import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainContainer() {
  return (
    <div className='dashboard-main-container'>
        <Outlet/>
    </div>
  )
}
