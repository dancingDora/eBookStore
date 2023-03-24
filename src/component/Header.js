import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink to = '/'>home</NavLink></li>
                <li><NavLink to = '/Player'> test1 </NavLink></li>
                <li><NavLink to = '/AllPlayer'> test2 </NavLink></li>
                <li><NavLink to = '/test3'> test3 </NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header