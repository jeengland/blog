import React, { useState } from 'react';
import posts from '../assets/posts';
import ReactMarkdown from 'react-markdown';

const Post = (props) => {
    const [data, setData] = useState(posts.data[0]);
    const [title, setTitle] = useState(data.title);
    const [date, setDate] = useState(data.date);
    const [text, useText] = useState(data.content);
    return(
        <article className='post' id={title.replace(/\s+/g, '-').toLowerCase()}>
            <h2 className='title'>{title}</h2>
            <time>{date}</time>
            <section className='post-content'>
                {text.map((segment, index) => {
                        if (index === 0) {
                            return(
                            <React.Fragment key={index}>
                                <ReactMarkdown className='first' source={segment} />
                                <button className='show'>Show More</button>
                            </React.Fragment>
                            )
                        } else if (index === text.length - 1) {
                            return(
                            <React.Fragment key={index}>
                                <ReactMarkdown source={segment} />
                                <button className='hide'>Show Less</button>
                            </React.Fragment>
                            )
                        } else {
                            return <ReactMarkdown key={index} source={segment} />
                        }

                })}
            </section>
        </article>
    )
}

export default Post;