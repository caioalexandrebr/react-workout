import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/slick.css';
import $ from 'jquery';

class App extends Component {

    constructor() {
        super();
        this.state = {lista: []};
    }
    // componentWillMount(){} - Dispara antes do render()
    // componentDidMount(){} - Dispara depois do primeiro render()
    componentDidMount(){
        $.ajax({
            url:"http://localhost:3004/autores",
            dataType: 'json',
            success:function(data){
                this.setState({lista:data});
            }.bind(this)
        })
    }

    render() {
        return (
            <div id="layout">

                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="/">Company</a>

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
                            <form className="pure-form pure-form-aligned">
                                <div className="pure-control-group">
                                    <label htmlFor="nome">Nome</label>
                                    <input id="nome" type="text" name="nome" value="" />
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" value="" />
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input id="senha" type="password" name="senha" />
                                </div>
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