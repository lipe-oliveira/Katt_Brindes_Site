import React, {Component} from "react";
import api from "../../services/api";
import './Styles.css'
import {Link} from 'react-router-dom';
import logo192 from '../../logo192.png'

export default class Main extends Component{
    state = {
        produtos: [],
        produtosinfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async(page = 1) =>{
        const response = await api.get(`/get_produtos?page=${page}`);
        const {docs, ...produtosinfo} = response.data
        this.setState({produtos: response.data.docs});
        console.log(produtosinfo);
    }

    render(){
        const { produtos } = this.state;
        return(
            <div className='div-produtos'>
                <h3>Produtos</h3>

                <div className='lista-produtos'>

                    {produtos.map(produto => (
                        <article key={produto._id}>
                            <img src={logo192} alt="Produto"/>
                            <br/>
                            <div>
                                <strong>{produto.nome}</strong>
                                <p>{produto.desc}</p>
                                <p>{produto.valor}</p>
                            </div>
                            <Link to={`/produtos/${produto._id}`}>Detalhes</Link>
                        </article>
                    ))}
                </div>
            </div>
            
        )

    }
}