import React from 'react';
import "./Styles.css"
import {Link} from 'react-router-dom'


const Header = () => (
    <header id="main-header">
        <h3>KBP - Katte brindes personalizados</h3>
        <br/>
        
        <div>
        <Link to={`/produtos/`}>Produtos</Link>
            <button>Contato </button>
            <button>Sobre   </button>
        </div>
    </header>
);

export default Header;