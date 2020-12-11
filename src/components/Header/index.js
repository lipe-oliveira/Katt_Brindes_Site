import React, { Component } from 'react';
import "./Styles.css"
import {BrowserRouter, Link, Redirect} from 'react-router-dom';


class Header extends Component{
    render(){
        return(
        <header id="main-header">
        <h3>KBP - Katte brindes personalizados</h3>
        <br/>
        
        <div>
            <BrowserRouter>
                <Link className="btn-header-link" to={`/produtos/`} onClick={()=>window.location.href="/produtos"}> Produtos</Link>
                <Link className="btn-header-link" to={`/produtos/`}> Contato</Link>
                <Link className="btn-header-link" to={`/sobre/`} onClick={()=>window.location.href="/sobre"}> Sobre</Link>
            </BrowserRouter>
            
        </div>
    </header>
        )
    }
    
};

export default Header;