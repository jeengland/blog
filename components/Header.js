import React from 'react';

const Header = (props) => {
    return (
        <header>
            {props.home ? <h1>Blog Home</h1> : undefined}
            <img src='https://i.ibb.co/4mw1g8Q/home-header.jpg' alt='A greyscale skyline' title='Photo courtesy of New York Public Library' />
        </header>
    )
}

export default Header;