import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Return = () => {
    return <App />
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<Return />, rootElement);