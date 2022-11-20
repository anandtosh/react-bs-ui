import React from 'react'
import { Outlet } from 'react-router-dom'
import useStore from '../../../stores'

export default function MainContainer() {
  const isOpen = useStore((state) => state.leftSidebar)
  return (
    <div className='dashboard-main-container ' style={isOpen ? {"margin-left" : "250px"} : {}}>
        <Outlet/>
    </div>
  )
}
