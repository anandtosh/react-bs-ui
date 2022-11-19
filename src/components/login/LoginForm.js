import React from 'react'

export default function LoginForm() {
  return (
    <>
        <div class="form-group">
          <label for="hello">Username/Email</label>
          <input type="text"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>

        <div class="form-group">
          <label for="hello">Password</label>
          <input type="password"
            class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
        </div>
    </>
  )
}
