import React from 'react'
import DashboardHeader from './header/DashboardHeader'
import './dashboard.css'
import LeftSidebar from './left-sidebar/LeftSidebar'
import MainContainer from './containers/MainContainer'
import RightSidebar from './right-sidebar/RightSidebar'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardHeader/>
      <div className='dashboard-content d-flex'>
        <LeftSidebar />
        <MainContainer />
        <RightSidebar />
      </div>
    </div>
  )
}
