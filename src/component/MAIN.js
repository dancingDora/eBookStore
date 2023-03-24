import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../view/pages/HOME/home'
import AllPlayer from './AllPlayer'
import Player from './Player'

const Main = () => (
    <main>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/AllPlayer' element={<AllPlayer />}/>
            <Route path='/Player' element={<Player />}/>
        </Routes>
    </main>
)
export default Main
