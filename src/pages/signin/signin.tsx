import React, { useState }  from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
// import image from './'
import './signin.scss';

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="signin-page">
      <div className='container'>
        <Logo className='App-logo'/>
        <img alt='signin-image' src='../../../assets/pablo-sign-in.webp' className='sign-in-image' />
      </div>
      <div className='sign-in'>
        <form className='sign-in-form'>
          <h1 >Welcome!</h1>
          <p>Enter details to login.</p>
          <input type="email" name="email" id="" placeholder='Email'/>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="password-input-field"
            />
            <button
              onClick={togglePasswordVisibility}
              className="password-toggle-button"
            >{passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <p className='forgot-password'>Forgot Password?</p>
          <button type="submit"><p>LOG IN</p></button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
