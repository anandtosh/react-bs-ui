import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Home from '../home/Home'
import Login from '../login/Login'
import { Table } from '../pages/table/Table'
import { User } from '../pages/user/User'
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/dashboard'} element={<Dashboard/>}>
          <Route path={'user'} element={<User/>}/>
          <Route path={'table'} element={<Table/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
