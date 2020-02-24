import React, { useState, useEffect } from 'react';
import posts from '../assets/posts.json';
import Post from './Post';

const PostContainer = () => {
    const [data] = useState(posts.data);
    const [expanded, setExpanded] = useState([]);
    useEffect(() => {
        data.map((post, index) => {
            if (index === 0) {
                setExpanded(expanded => expanded.concat(true));
            } else {
                setExpanded(expanded => expanded.concat(false));
            }
        }
    )}, []);
    return (
        <main className='posts'>
            {data.map((post, index) => {
            return (
                <Post title={post.title}
                        date={post.date}
                        text={post.content}
                        expanded={expanded[index]}
                        key={index}
                />
            )
        })}
        </main>
    )
}


export default PostContainer;