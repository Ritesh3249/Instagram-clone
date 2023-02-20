import React from 'react'
import "./header.css"
import logo from "../../assests/instagram.png"
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <div className='homeHeader displayFlex justifyContentSpacebetween'>
            <span className='homeLogo'><img src={logo} /></span>
            <span className='chatIcon'>{location.pathname=="/chat"?"":<i className="fa-regular fa-comment " style={{ cursor: "pointer"}}></i>}</span>
        </div>
    )
}

export default Header