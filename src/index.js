import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; //for conditionally rendering the page components as per routes
import './index.css';
import App from './App';
import {PicContextProvider} from "./PicContext"; //Context PROVIDER component

ReactDOM.render(<PicContextProvider>
                    <Router>
                        <App />
                    </Router>
                </PicContextProvider>, document.getElementById('root'));