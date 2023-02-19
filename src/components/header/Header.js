import React from 'react'
import "./header.css"
import logo from "../../assests/instagram.png"

const Header = () => {
    return (
        <div className='homeHeader displayFlex justifyContentSpacebetween'>
            <span className='homeLogo'><img src={logo} /></span>
            <span className='chatIcon'><i class="fa-regular fa-comment " style={{ cursor: "pointer"}}></i></span>
        </div>
    )
}

export default Header