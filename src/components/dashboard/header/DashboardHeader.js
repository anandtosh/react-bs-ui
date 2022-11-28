import React from 'react'
import {CgDockLeft, CgDockRight} from "react-icons/cg"
import { Link, NavLink } from 'react-router-dom'
import useStore from '../../../stores/index'
export default function DashboardHeader() {
  // toggle menu using store and save to state
  const leftSidebar = useStore((state) => state.leftSidebar)
  const setLeftSidebar = useStore((state) => state.setLeftSidebar)

  return (
    <div className='d-flex dashboard-header bg-light '>
        <div className={'menu-toggler bg-dark d-flex '+(leftSidebar? 'open' : '')}>
            <div className={'menu-brand-name text-white '+(leftSidebar ? '' : 'd-none')}>
              <NavLink to={'/'}>
                <h4 className='text-white'>a2zcoder.com</h4>
              </NavLink>
            </div>
            {
              leftSidebar ?
              <CgDockLeft size={30} color={'white'} className={'mr-auto'}  onClick={(e) => setLeftSidebar(!leftSidebar)} style={{"cursor" : "pointer"}}/>
              :
              <CgDockRight size={30} color={'white'} className={'mr-auto'}  onClick={(e) => setLeftSidebar(!leftSidebar)} style={{"cursor" : "pointer"}}/>
            }
        </div>
        <div className='menu-search'>
          b5sformin
        </div>
        <div className='menu-profile'>
            <Link to={'/login'}>Login</Link>
        </div>
    </div>
  )
}
