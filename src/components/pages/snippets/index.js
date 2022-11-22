import React from 'react'
import NotificationList from './notification-list/NotificationList'
import PeopleListSnip from './people-list/PeopleListSnip'
import './snippets.css'
export default function index() {
  return (
    <div className='m-3 d-flex snippets-container'>
        <PeopleListSnip/>
        <NotificationList/>
    </div>
  )
}
