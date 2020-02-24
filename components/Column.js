import React from 'react';
import Header from './Header';
import PostContainer from './PostContainer';

const Column = () => {
    return (
        <div className='col'>
            <Header />
            <PostContainer />
        </div>
    )
}

export default Column;