import React, { useState, useEffect } from 'react';
import Post from './Post';

const PostList = (props) => {
    return (
        <main className='posts'>
            {props.data.map((post, index) => {
            return (
                <Post title={post.title}
                        id={post.id}
                        date={post.date}
                        text={post.content}
                        index={index}
                        maxIndex={props.data.length - 1}
                        key={index}
                />
            )
        })}
        </main>
    )
}


export default PostList;