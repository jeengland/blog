import React from 'react';
import ReactMarkdown from 'react-markdown';

const Post = (props) => {
    return(
        <article className='post' id={props.title.replace(/\s+/g, '-').toLowerCase()}>
            <h2 className='title'>{props.title}</h2>
            <time>{props.date}</time>
            <section className='post-content'>
                {props.text.map((segment, index) => {
                        if (index === 0) {
                            return(
                            <React.Fragment key={index}>
                                <ReactMarkdown className='first' source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                                <button className='show'>Show More</button>
                            </React.Fragment>
                            )
                        } else if (index === props.text.length - 1) {
                            return(
                            <React.Fragment key={index}>
                                <ReactMarkdown source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                                <button className='hide'>Show Less</button>
                            </React.Fragment>
                            )
                        } else {
                            return <ReactMarkdown key={index} source={segment} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                        }

                })}
            </section>
        </article>
    )
}

export default Post;