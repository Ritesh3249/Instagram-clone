import React from 'react'
import logo from "../../assests/download.png"
import "./login.css"
const Login = () => {
  return (
    <div className='loginBody  displayFlex justifyContentCenter alignItemCenter' >
        <div className='loginMainDiv'>
           <div className='logInLogo'><img src={logo} /></div>
           <div className='loginUserName '>
            <input className='inputField' placeholder='username or email'/>
          </div>
           <div className='loginPassword '>
            <input placeholder='password' className='inputField'/>
          </div>
           <button className='loginSubmit submitButton' >Log in</button>
           <div className='loginSubmit submitButton'>Log in with facebook</div>
           <div className='textAlignCenter forgotPassword'>Forgot password?</div>
        </div>


    </div>
  )
}

export default Login