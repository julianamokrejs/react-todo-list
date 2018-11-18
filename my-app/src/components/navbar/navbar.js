import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import Menu from './menu'
import './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>
            <img
                className='navbar__logo'
                src={Logo}
                alt='Reprograma'
            />
        </Link>
        <Menu />
    </nav>
)

export default Navbar
