import React from 'react'
import UserWidgetImageBg from './UserWidegetImageBg'
import UserWidgetColorBg from './UserWidgetColorBg'
import './widgets.css'
export default function Widgets() {
  return (
   <div className='m-3 row g-4'>
        <div className='col-md-4'>
            <UserWidgetColorBg />
        </div>
        <div className='col-md-4'>
            <UserWidgetImageBg />
        </div>
   </div>
  )
}
