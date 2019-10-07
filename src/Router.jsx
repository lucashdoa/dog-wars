import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home.jsx';
import Main from './Main.jsx';

export default props => (
    <BrowserRouter>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div>
        <Route path='/' component={Home} exact/>
        <Route path='/main' component={Main}/>
        </div>
    </BrowserRouter>
); 