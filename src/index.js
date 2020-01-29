import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {PicContextProvider} from "./PicContext";

ReactDOM.render(<PicContextProvider>
                    <Router>
                        <App />
                    </Router>
                </PicContextProvider>, document.getElementById('root'));