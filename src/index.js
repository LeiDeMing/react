import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import './assets/css/reset.css'
import './assets/fonts/font-1.0.0.css'



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >   
            <Route path="/" component={App} />
        </BrowserRouter >
    </Provider>,
    document.getElementById('root'));
