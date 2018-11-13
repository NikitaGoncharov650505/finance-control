import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account" component={App} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
