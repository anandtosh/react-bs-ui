/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import useStore from '../../../stores/index'
import {AiOutlineDashboard} from 'react-icons/ai'

export default function LeftSidebar() {
  const isOpen = useStore((state) => state.leftSidebar)
  return (
    <div className={'dashboard-left-sidebar d-flex flex-column flex-shrink-0 bg-light '+ (isOpen?'dls-open' : 'dls-close text-center')}>
      <ul class="nav nav-pills nav-flush flex-column mb-auto w-100">
        <li class="nav-item">
          <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            <AiOutlineDashboard size={30} color="white"/><span className='dls-m-name'>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
            <AiOutlineDashboard size={30}/>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
            <svg class="bi" width="24" height="24" role="img" aria-label="Orders"></svg>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
            <svg class="bi" width="24" height="24" role="img" aria-label="Products"></svg>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
            <svg class="bi" width="24" height="24" role="img" aria-label="Customers"></svg>
          </a>
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
