import React from 'react'
import {CgMenu} from "react-icons/cg"
import { Link } from 'react-router-dom'
import useStore from '../../../stores/index'
export default function DashboardHeader() {
  // toggle menu using store and save to state
  const leftSidebar = useStore((state) => state.leftSidebar)
  const setLeftSidebar = useStore((state) => state.setLeftSidebar)

  return (
    <div className='d-flex dashboard-header'>
        <div className='menu-toggler' onClick={(e) => setLeftSidebar(!leftSidebar)}>
            <CgMenu size={30} color={'white'}/>
        </div>
        <div className='menu-search'>
            helsdf
        </div>
        <div className='menu-profile'>
            <Link to={'/login'}>Login</Link>
        </div>
    </div>
  )
}
