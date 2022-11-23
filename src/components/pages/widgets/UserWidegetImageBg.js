import React from 'react'
import { MdCall, MdFacebook, MdLocationPin, MdThumbUp } from 'react-icons/md'

export default function UserWidgetImageBg() {
  return (
    <div class="card user-widget-color">
        <div className='card-header py-3 text-white text-start'
        style={{backgroundImage : "url(https://picsum.photos/500/600)", textShadow : "2px 2px 2px 1px black"}}
        >
            <h3 className=''>Anand Bhatnagar</h3>
            <p className='pb-4'>Software Developer</p>
        </div>
        <img className='user-image img img-thumbnail rounded-circle' src="https://picsum.photos/100/100" alt="user" />
        <div class="card-body">
            <div className='row'>
                <div className='col'>
                    <p>
                        <MdCall/><span className='ms-2'>+91 9870740539</span>
                    </p>
                    <p>
                        <MdLocationPin /><span className='ms-2'>Gurugram</span>
                    </p>
                </div>
                <div className='col'>
                    <p>
                        <MdFacebook/><span className='ms-2'>fb.com/dctpvt</span>
                    </p>
                    <p>
                        <MdThumbUp/><span className='ms-2'>50K</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
