import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const [expanded, setExpanded] = useState(props.index === props.maxIndex)
    const expandToggle = () => {
        setExpanded(expanded => expanded = expanded ? false : true)
    }
    return(
        <article className='post' id={props.id}>
            <Link to={`/post/${props.index}`}>
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
                                <button onClick={expandToggle} className='hide'>Show Less</button>
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
                                    <button onClick={expandToggle} className='show'>Show More</button>
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