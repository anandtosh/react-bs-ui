import React from 'react'

export default function NotificationList() {
  return (
    <div class="card">
        <div class="card-header">
            <div class="card-text">Notifications</div>
        </div>
        <ul class="list-group list-group-flush">
            {[0,1,2,3].map((el) => (
            <li class="list-group-item d-flex" key={el}>
                <div className='notification-img'>
                    <img src="https://picsum.photos/200/200" class="img-fluid rounded-circle" width={50} alt="" />
                </div>
                <div className='notification-body ms-3'>
                    <div className=''>
                        <strong>Anand Bhatnagar</strong> uploaded a photo you may like.
                    </div>
                    <span className='text-muted'>1 hour ago</span>
                </div>
            </li>
            ))}
          </ul>
    </div>
  )
}
