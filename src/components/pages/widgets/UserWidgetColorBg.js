import React from 'react'
import { MdCall, MdFacebook, MdLocationPin, MdThumbUp } from 'react-icons/md'

export default function UserWidgetColorBg() {
  return (
    <div class="card user-widget-color">
        <div className='card-header py-3 bg-success text-white text-center'>
            <h3>Anand Bhatnagar</h3>
            <p className='pb-4'>Software Developer</p>
        </div>
        <img className='user-image img img-thumbnail rounded-circle' src="https://picsum.photos/100/100" alt="user" />
        <div class="card-body row text-center">
        <div className='col'>
            <span className='d-block'>12,000</span>
            <span className='d-block fw-bold'>Likes</span>
        </div>
        <div className='col border-end border-start'>
            <span className='d-block'>Anand</span>
            <span className='d-block fw-bold'>Name</span>
        </div>
        <div className='col'>
            <span className='d-block'>120K</span>
            <span className='d-block fw-bold'>Followers</span>
        </div>
      </div>
    </div>
  )
}
