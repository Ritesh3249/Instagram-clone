import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import Login from "../page/login/Login"
import Register from "../page/register/Register"
import Chat from "../page/chat/Chat"
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
        </div>
  )
}

export default MainRoute