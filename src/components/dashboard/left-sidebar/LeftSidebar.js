/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useStore from '../../../stores/index'
import {AiOutlineDashboard} from 'react-icons/ai'
import {BsTable} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const getBtnClasses =({ isActive }) =>isActive ?"nav-link active py-3 border-bottom" : "nav-link py-3 border-bottom"

export default function LeftSidebar() {
  const isOpen = useStore((state) => state.leftSidebar)
  return (
    <div className={'dashboard-left-sidebar d-flex flex-column flex-shrink-0 bg-light position-fixed '+ (isOpen?'dls-open' : 'dls-close text-center')}>
      <ul class="nav nav-pills nav-flush flex-column mb-auto w-100">
        <li class="nav-item">
          <NavLink to={'/dashboard/user'} className={getBtnClasses} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            <AiOutlineDashboard size={20}/><span className='dls-m-name'>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/dashboard/table'} className={getBtnClasses} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
            <BsTable size={20}/><span className='dls-m-name'>Table</span>
          </NavLink>
        </li>
      </ul>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle show" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="true">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3" data-popper-placement="top-start" style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -58px)"}} data-popper-reference-hidden="">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  )
}

