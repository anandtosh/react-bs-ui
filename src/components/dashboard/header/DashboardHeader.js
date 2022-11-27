import React from 'react'
import {CgDockLeft, CgDockRight} from "react-icons/cg"
import { Link } from 'react-router-dom'
import useStore from '../../../stores/index'
export default function DashboardHeader() {
  // toggle menu using store and save to state
  const leftSidebar = useStore((state) => state.leftSidebar)
  const setLeftSidebar = useStore((state) => state.setLeftSidebar)

  return (
    <div className='d-flex dashboard-header '>
        <div className={'menu-toggler bg-purple d-flex '+(leftSidebar? 'open' : '')}>
            <div className={'menu-brand-name text-white '+(leftSidebar ? '' : 'd-none')}>
              <h4>a2zcoder.com</h4>
            </div>
            {
              leftSidebar ?
              <CgDockLeft size={30} color={'white'} className={'mr-auto'}  onClick={(e) => setLeftSidebar(!leftSidebar)} style={{"cursor" : "pointer"}}/>
              :
              <CgDockRight size={30} color={'white'} className={'mr-auto'}  onClick={(e) => setLeftSidebar(!leftSidebar)} style={{"cursor" : "pointer"}}/>
            }
        </div>
        <div className='menu-search'>
          lksjdfkljlf
        </div>
        <div className='menu-profile'>
            <Link to={'/login'}>Login</Link>
        </div>
    </div>
  )
}
