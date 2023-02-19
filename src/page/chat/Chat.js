import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./chat.css"

const Chat = () => {
  return (
    <div>
      <Header />
      <div>
        <div><input placeholder='Search...' /></div>
        <div className='findChatUser'>
          <span className='findChatUserImage'><img alt='r' /></span>
          <div className='findChatMainDiv'>
            <div className='findName'>
              Ritesh gupta
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Chat