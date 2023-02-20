import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./inbox.css"

const Inbox = () => {
    return (
        <div >
            <Header />
            <div style={{ paddingTop: "4rem" }} className="chatMainDiv">
                <div className='chatUser'>Ritesh gupta</div>
                <div className='chatBox'>
                    <div className='sender'>Hello Ritesh</div>
                    <div className='receiver'>Hello Anjali</div>
                </div>
                <div className='sendMessage'><input placeholder='Message..' /><button>{">"}</button></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Inbox