import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';

render ((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));