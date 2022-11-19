import React from 'react'

export default function ForgotPasswordForm() {
  return (
    <div class="form-group">
    <label for="hello">Email</label>
        <input type="email"
        class="form-control" name="hello" id="hello" aria-describedby="helpId" placeholder="username" />
    </div>
  )
}
