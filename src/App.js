import React, { Component } from 'react';
/* import $ from 'jquery'; */
import InputDefault from './componentes/InputDefault';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/slick.css';

class App extends Component {

    constructor() {
        super();
        this.state = {lista: [], nome:'',email:'',senha:''};
        this.sendForm = this.sendForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }
    // componentWillMount(){} - Dispara antes do render()
    // componentDidMount(){} - Dispara depois do primeiro render()
    componentDidMount(){
        var url = 'http://localhost:3004/autores ';
        fetch(url).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            this.setState({lista:response});
        })
    }

    sendForm(evento){
        evento.preventDefault();
        var url = 'http://localhost:3004/autores ';
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            const oltList = this.state.lista;
            oltList.push(response);
            const newList = oltList;
            this.setState({lista: newList});
        })
    }

    setNome(evento){
        this.setState({nome:evento.target.value});
    }
    setEmail(evento){
        this.setState({email:evento.target.value});
    }
    setSenha(evento){
        this.setState({senha:evento.target.value});
    }

    render() {
        return (
            <div id="layout">

                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="/">React</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item"><a href="/" className="pure-menu-link">Autor</a></li>
                            <li className="pure-menu-item"><a href="/" className="pure-menu-link">Livro</a></li>
                        </ul>
                    </div>
                </div>

                <div id="main">
                    <div className="header">
                        <h1>Cadastro de Autores</h1>
                    </div>
                    <div className="content" id="content">
                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned" onSubmit={this.sendForm.bind(this)} method="post">
                                
                                <InputDefault id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>

                                <InputDefault id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="E-mail"/>

                                <InputDefault id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>

                                <div className="pure-control-group">
                                    <label></label>
                                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <table className="pure-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.lista.map(function(autor){
                                            return (
                                                <tr key={autor.id}>
                                                    <td>{autor.nome}</td>
                                                    <td>{autor.email}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="content">
                        <div className="responsive">
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/904/2533904.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/976/42128976.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/976/42128976.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/976/42128976.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/976/42128976.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-book">
                                        <div className="book-img">
                                            <img src="https://statics.livrariacultura.net.br/products/capas/976/42128976.jpg" alt="" />
                                        </div>
                                        <div className="book-desc">
                                            <h3 className="book-title">Nam iaculis pulvinar euismod</h3>
                                            <span className="book-author">Dolor Sit Amet</span>
                                            <span className="book-oldprice">R$ 36,20</span>
                                            <h4 className="book-price">R$ 19,20</h4>
                                        </div>
                                    </div>
                                    <a className="buy" href="/"><div className="buy-btn">Comprar</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;