import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const [expanded, setExpanded] = useState(props.index === props.maxIndex)
    const [windowPos, setWindowPos ] = useState(undefined);
    const expandToggle = (scroll) => {
        scroll ? setWindowPos(window.scrollY) : undefined;
        setExpanded(expanded => expanded = expanded ? false : true);
    }
    useEffect(() => window.scrollTo(0, windowPos), [expanded])
    return(
        <article className='post' id={props.id}>
            <Link to={`/blog/post/${props.index}`} onClick={() => window.scrollTo(0, 0)}>
                <h2 className='title'>{props.title}</h2>
                <time>{props.date}</time>
            </Link>
            <section className='post-content'>
                {props.text.map((segment, index) => {
                    if (expanded) {
                        if (index === props.text.length - 1) {
                            return(
                            <React.Fragment key={index}>
                                <ReactMarkdown source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                                <button onClick={() => expandToggle(false)} className='hide'>Show Less</button>
                            </React.Fragment>
                            )
                        } else {
                            return <ReactMarkdown key={index} source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                        }
                    } else {
                        if (index === 0) {
                            return(
                                <React.Fragment key={index}>
                                    <ReactMarkdown className='first' source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                                    <button onClick={() => expandToggle(true)} className='show'>Show More</button>
                                </React.Fragment>
                            ) 
                        }
                    }
                })}
            </section>
        </article>
    )
}

export default Post;