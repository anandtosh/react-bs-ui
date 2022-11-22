import React from 'react'

export default function PeopleListSnip() {
  return (
    <div class="card people-list-snip">
        {/* <img class="card-img-top" data-src="holder.js/100x180/?text=Image cap" alt="Card image cap"> */}
        <div class="card-header">
            {/* <h4 class="card-title">Friends List</h4> */}
            <p class="card-text">Friend's List</p>
        </div>
        <ul class="list-group list-group-flush">
            {[0,0,0].map(() => (
            <li class="list-group-item d-flex">
                <div className='snip-img'>
                    <img src="https://picsum.photos/100/100" class="img rounded-circle img-thumbnail" width={70} alt=""/>
                </div>
                <div className='snip-body ms-3'>
                    <div>RT008 - <strong>Ananad Bhatnagar</strong></div>
                    <div className='text-muted'>Designation - SDE-2</div>
                    <div className='text-muted'>Moradabad</div>
                </div>
            </li>
            ))}
        </ul>
    </div>
  )
}
