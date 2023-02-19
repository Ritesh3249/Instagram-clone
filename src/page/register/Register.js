import React from 'react'
import "./register.css"
import logo from "../../assests/download.png"

const Register = () => {
  return (
    <div className='registerBody  displayFlex justifyContentCenter alignItemCenter' >
    <div className='registerMainDiv'>
       <div className='registerLogo'><img src={logo} /></div>
       <div className='registerUserName marginBotton '>
        <input className='inputField' placeholder='Name'/>
      </div>
       <div className='registerUserName marginBotton '>
        <input className='inputField' placeholder='Email'/>
      </div>
      <div className='registerPassword '>
      <input placeholder='Password' className='inputField'/>
      </div>
      <div className='registerUserName marginBotton '>
       <input className='inputField' placeholder='Confirm password'/>
     </div>
       <button className='registerSubmit submitButton' >Sign up</button>
       <div className='loginSubmit submitButton'>Log in with facebook</div>
       <div className='textAlignCenter forgotPassword'>Forgot password?</div>
    </div>


</div>
  )
}

export default Register