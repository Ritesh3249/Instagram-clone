import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../page/home/Home'
import Login from "../page/login/Login"
import Register from "../page/register/Register"
import Chat from "../page/chat/Chat"
import Search from '../page/search/Search'
import Inbox from '../page/inbox/Inbox'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/inbox" element={<Inbox/>}/>

            <Route path="/search" element={<Search/>}/>
        </Routes>
        </div>
  )
}

export default MainRoute