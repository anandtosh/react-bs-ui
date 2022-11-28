import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ForgotPasswordForm from './ForgotPasswordForm'
import './login.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
export default function Login() {

    const [formmode,setFormMode] = useState(1)

    const renderForm = (f) =>{
        switch(f) {
            case 1:
                return <LoginForm />
            case 2:
                return <RegisterForm />
            case 3:
                return <ForgotPasswordForm />
            default:
                return <LoginForm/>
        }
    }
  return (
    <>
        <div className='d-flex justify-content-center vh-100 align-items-center bg-login'>
            <div className='bg-danger login-card'>
                <div className='login-card-header'>
                    <button type="button" class="btn btn-primary" onClick={(e) => {setFormMode(1)}}>
                        Login
                    </button>
                    <button type="button" class="btn btn-success" onClick={(e) => {setFormMode(2)}}>
                        Register
                    </button>
                </div>
                <div className='login-card-body'>
                    {renderForm(formmode)}
                </div>
                <div className='login-card-footer d-flex justify-content-between'>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    <a className='' onClick={(e) => {setFormMode(3)}}>forgot password</a>
                </div>
            </div>
        </div>
    </>
  )
}
