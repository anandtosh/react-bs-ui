import React from 'react'
import {NavLink} from 'react-router-dom'
export default function HomeHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light home-navigation">
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src="https://picsum.photos/100/100" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
        <NavLink to={'/login'} className={'mx-1'} style={{ textDecoration: 'none' }}>
            <button type="button" class="btn btn-primary">
                    Login/Register
            </button>
        </NavLink>
        <NavLink to={'/dashboard'} className={'mx-1'} style={{ textDecoration: 'none' }}>
            <button type="button" class="btn btn-success">
                    Dashboard
            </button>
        </NavLink>
        </div>
    </div>
    </nav>
  )
}
