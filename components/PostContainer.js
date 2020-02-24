import React, { useState, useEffect } from 'react';
import posts from '../assets/posts.json';
import Post from './Post';

const PostContainer = () => {
    const [data] = useState(posts.data);
    return (
        <main className='posts'>
            {data.map((post, index) => {
            return (
                <Post title={post.title}
                        id={post.id}
                        date={post.date}
                        text={post.content}
                        index={index}
                        maxIndex={data.length - 1}
                        key={index}
                />
            )
        })}
        </main>
    )
}


export default PostContainer;