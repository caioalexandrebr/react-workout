import React, { Component } from 'react';
import InputDefault from './componentes/InputDefault';

export class FormularioAutor extends Component {

    constructor() {
        super();
        this.state = {nome:'',email:'',senha:''};
        this.sendForm = this.sendForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
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

    render(){
        return(
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
        );
    }
}

export class TabelaAutor extends Component {

    constructor() {
        super();
        this.state = {lista: []};
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

    render(){
        return(
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
        );
    }
}