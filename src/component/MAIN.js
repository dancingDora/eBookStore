import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/pages/HOME/home'
import BookProfile from '../view/pages/BOOK_PROFILE/book_profile'
import MyCart from '../view/pages/MY_CART/my_cart'
import MyProfile from "../view/pages/MY_PROFILE/my_profile";

const Main = () => (
    <main>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/home' element={<Home />}/>
            <Route exact path='/my_cart' element={<MyCart />}/>
            <Route exact path='/book_profile' element={<BookProfile />}/>
            <Route exact path='/my_profile' element={<MyProfile />}/>
        </Routes>
    </main>
)
export default Main
