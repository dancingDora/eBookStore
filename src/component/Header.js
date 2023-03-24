import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><NavLink to = '/'>home</NavLink></li>
                <li><NavLink to = '/my_cart'> my_cart </NavLink></li>
                <li><NavLink to = '/book_profile'> book_profile </NavLink></li>
                <li><NavLink to='/my_profile'> my_profile </NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header