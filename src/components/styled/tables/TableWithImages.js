import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import './tableWithImages.css'
export default function TableWithImages() {
  return (
    <div>
        <table class="table customTableWithImages align-middle caption-top">
            <caption>Table with images</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="checkedValue"/>
                        </label>
                        </div>
                    </td>
                    <td className='d-flex align-items-center'>
                        <span className='tableImage'>
                            <img src="https://picsum.photos/100/100" class="img-fluid rounded-circle" width={40} alt="" />
                        </span>
                        <div className='ms-2'>
                            <div className='tableCellEmail fw-bold'>dct.mbd@gmail.com</div>
                            <div className='tableCellName text-muted'>Anand bhatnagar</div>
                        </div>
                    </td>
                    <td>username1</td>
                    <td>
                        <span class="badge rounded-pill text-success bg-success-light"><BsFillCircleFill size={10}></BsFillCircleFill> Active</span>
                    </td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar"
                                style={{"width": "100%"}}
                                aria-valuenow="100" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                >
                            </div>
                        </div>
                    </td>
                    <td>
                        <ImCross size={10} color={'red'}></ImCross>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
