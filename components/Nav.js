import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            {/* #TODO add a logo */}
            <NavLink className='current-page' to='/'>Home</NavLink>
            <a href='#'>About</a>
            <a href='https://jacobengland.computer/nasa-photo-of-the-day'></a>
        </nav>
    )
}

export default Nav;