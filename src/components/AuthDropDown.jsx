import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginlogo from '../assets/Arrow-Logo.svg'
import signuplogo from '../assets/Signup-Logo.svg'

const AuthDropDown = () => {
    const [isLoggedIn , setIsLoggedIn] =useState(false)
  return (
    <>
    <main className='container shadow-lg border rounded bg-light p-2'>
        <div className='d-flex flex-column gap-3 m-3'>
          {isLoggedIn ? (
            <>
              <Link className='btn btn-primary text-light f-5'>Logout</Link>
              <Link className='btn btn-primary text-light f-5'>Order</Link>
            </>
          ) : (
            <>
              {/* login div */}
              <div className='d-flex bg-primary border rounded p-2 pap-3'>
                <img src={loginlogo} alt='log-in-logo' />
                <Link className='btn btn-primary text-light f-5' to='/SignIn'>
                  Login
                </Link>
              </div>

              {/* sign up div */}
              <div className='d-flex bg-primary border rounded p-2 gap-3'>
                <img src={signuplogo} alt='sign-up-img' />
                <Link
                  className='btn btn-primary text-lig f-5 fw-bolder '
                  to='/SignUp'
                >
                  SignUp
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
        
    </>
  )
}

export default AuthDropDown