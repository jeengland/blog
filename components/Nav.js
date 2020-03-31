import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Nav = () => {
    const page = useHistory().location.pathname;
    if (page === '/blog/') {
        return (
            <nav>
                {/* #TODO add a logo */}
                {/* #LOGO in pictures */}
                <NavLink className='current-page' to='/blog/' onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                <a href='#'>About</a>
                <a href='https://jacobengland.computer/nasa-photo-of-the-day'></a>
            </nav>
        )
    } else {
        return (
            <nav>
                {/* #TODO add a logo */}
                <NavLink to='/blog/' onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                <a href='#'>About</a>
                <a href='https://jacobengland.computer/nasa-photo-of-the-day'></a>
            </nav>
        )
    }
}

export default Nav;