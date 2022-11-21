import React from 'react'
import { CgHome } from 'react-icons/cg'
import './cards.css'
export default function BriefCard(props) {
  return (
    <div className='brief-card bg-success m-3 p-2 text-light rounded flex-grow-1 d-flex align-items-center'>
        <div className='brief-card-left'>
            <div className=''>
                hello
            </div>
            <div className=''>
                my friend jksh
            </div>
        </div>
        <div className='brief-card-right'>
            {props?.icon ||  <CgHome size={30}/>}
        </div>
    </div>
  )
}
