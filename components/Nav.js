import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Nav = () => {
    const page = useHistory().location.pathname;
    if (page === '/') {
        return (
            <nav>
                {/* #TODO add a logo */}
                <NavLink className='current-page' to='/' onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                <a href='#'>About</a>
                <a href='https://jacobengland.computer/nasa-photo-of-the-day'></a>
            </nav>
        )
    } else {
        return (
            <nav>
                {/* #TODO add a logo */}
                <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                <a href='#'>About</a>
                <a href='https://jacobengland.computer/nasa-photo-of-the-day'></a>
            </nav>
        )
    }
}

export default Nav;