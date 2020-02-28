import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import PostList from './PostList';
import posts from '../assets/posts.json';
import SinglePost from './SinglePost';

const Column = () => {
    const [data] = useState(posts.data);
    return (
        <div className='col'>
            <Route exact path='/' >
                <Header home={true} />
                <PostList data={data} />
            </Route>
            <Route path='/post/:id' >
                <Header home={false} />
                <SinglePost data={data}/>
            </Route>
        </div>
    )
}

export default Column;