import React from 'react'

export const DashboardCard = (props) => {
  return (
    <div className='m-3 rounded bg-white shadow'>
        {
          props.header
          ?
          <div className='rounded-top bg-light p-3'>{props.header}</div>
          :
          <></>
        }
          <div className='p-3'>
            {props.children}
          </div>
        {
          props.footer
          ?
          <div className='rounded-bottom bg-light p-3'>{props.footer}</div>
          :
          <></>
        }
    </div>
  )
}
