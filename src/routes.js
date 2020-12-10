import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main/index';
import Produto from './pages/produto/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/produtos" component={Main}/>
            <Route path='/produtos/:id' component={Produto}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;