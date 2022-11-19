import React from 'react'

export default function RegisterForm() {
  return (
    <>
        <div class="form-group">
          <label for="hello">Name</label>
          <input type="text"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>

        <div class="form-group">
          <label for="hello">Email</label>
          <input type="email"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>

        <div class="form-group">
          <label for="hello">Password</label>
          <input type="password"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>

        <div class="form-group">
          <label for="hello">Confirm Password</label>
          <input type="password"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>
    </>
  )
}
