import React from 'react'
import logo from "../../assests/instagram.png"
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./home.css"
const Home = () => {
  return (
    <div >
    <Header/>
      <div style={{ padding: "1rem" }}>
        <div className='profileInfo displayFlex justifyContentSpaceBetween'>
          <span className='profileImage'> <div className='displayFlex justifyContentCenter'><img src={logo} alt='profile image' /></div></span>
          <span className='profileDetails'>
            <div className='profileName'>Profile name</div>
            <div className='postAndFollow displayFlex'>
              <span><div>Posts</div><div>22</div></span>
              <span><div>Followers</div><div>122</div></span>
              <span><div>Following</div><div>1122</div></span>
            </div>
          </span>
        </div>
        <div className='socialInfo'>
        <button className='follow'>Follow</button>
        <button>Message</button>
        </div>
        <button className='submitButton'>upload Image</button>
        <div className='uploadedPost'>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          <div><img src={logo} /></div>
          

        </div>
      </div>
<Footer/>
    </div>
  )
}

export default Home