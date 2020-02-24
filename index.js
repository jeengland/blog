import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/post';

const App = () => {
    return (
        <Post />
    )
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);