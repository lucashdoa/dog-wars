import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Main from './main/Main.jsx';

export default props => (
    <BrowserRouter>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div>
        <Route path='/' component={Home} exact/>
        <Route path='/main' component={Main}/>
        <Switch>
            <Route path="/main">
                <Main />
            </Route>
        </Switch>
        </div>
    </BrowserRouter>
); 