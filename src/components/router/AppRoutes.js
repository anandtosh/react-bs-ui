import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Home from '../home/Home'
import Login from '../login/Login'
import { Table } from '../pages/table/Table'
import { User } from '../pages/user/User'
import Snippets from '../pages/snippets'
import Widgets from '../pages/widgets/Widgets'
import Charts from '../pages/charts/Charts'
import BootstrapCompnenets from '../pages/bootstrap/BootstrapCompnenets'
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/dashboard'} element={<Dashboard/>}>
          <Route index element={<BootstrapCompnenets/>} />
          <Route path={'user'} element={<User/>}/>
          <Route path={'table'} element={<Table/>}/>
          <Route path={'snippets'} element={<Snippets/>}/>
          <Route path={'widgets'} element={<Widgets/>}/>
          <Route path={'charts'} element={<Charts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
