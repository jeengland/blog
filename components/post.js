import React, { useState } from 'react';
import posts from '../assets/posts';
import ReactMarkdown from 'react-markdown';

const Post = (props) => {
    const data = posts.data[0];
    console.log(data.content);
    const title = data.title;
    const date = data.date;
    const text = data.content;
    return(
        <article>
            <h2 className='title'>{title}</h2>
            <time>{date}</time>
            <section className='post-content'>
                <ReactMarkdown source={text[0]} className='first' />
                <ReactMarkdown source={text[1]} />
            </section>
        </article>
    )
}

export default Post;