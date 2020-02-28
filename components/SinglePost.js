import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import Post from './Post';

const SinglePost = (props) => {
    const { id } = useParams();
    const post = props.data[id];
    return (
        <main className='posts'>
            <article className='post'>
                <h2 className='title'>{post.title}</h2>
                <time>{post.date}</time>
                <section className='post-content'>
                    {post.content.map((segment, index) => {
                        return (
                            <ReactMarkdown key={index} source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                        )
                    })}
                </section>
            </article>
        </main>
    )
}

export default SinglePost;