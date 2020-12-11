import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from './pages/main/index';
import Produto from './pages/produto/index';
import Sobre from './pages/sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => {
                return(
                    <Redirect exact to="/produtos/"/>
                )
            }}/>
            <Route path="/produtos/" component={Main}/>
            <Route path='/produtos/:id' component={Produto}/>
            <Route path='/sobre/' component={Sobre}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;