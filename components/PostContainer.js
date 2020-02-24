import React, { useState } from 'react';
import posts from '../assets/posts.json';
import Post from './Post';

const PostContainer = () => {
    const [data] = useState(posts.data);
    return (
        <main className='posts'>
            {data.map((post, index) => {
            return (
                <Post title={post.title}
                      date={post.date}
                      text={post.content}
                      key={index}
                />
            )
        })}
        </main>
    )
}

export default PostContainer;