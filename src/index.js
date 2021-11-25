import React from 'react';
import ReactDOM from 'react-dom';
import {MoralisProvider} from "react-moralis";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//MoonSwap Starting point
ReactDOM.render(
    <MoralisProvider appId="GwUMWJQLJflHPmJ5P5hDSkikyeGyfWxL1xAjYWZm"
                     serverUrl="https://sfvod0dysq0c.usemoralis.com:2053/server">
        <App/>
    </MoralisProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
