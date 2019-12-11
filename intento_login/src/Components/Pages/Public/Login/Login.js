import React, {Component} from 'react';

import Button from '../../../Common/Btns/Button';
import Campo from  '../../../Common/Campo/Campo';
import './login.css';

export default class Login extends Component{
  constructor(){
    super();
    this.state = {
      email:'',
      password: '',
    };

    this.onchangeHandler = this.onchangeHandler.bind(this);
    this.onSiginBtnClick = this.onSiginBtnClick.bind(this);
  }

  onchangeHandler(e){
    const {name,value } = e.target;
    this.setState({...this.state,[name]:value});
  }

  onSiginBtnClick(e){
    console.log(this.state);

  }
    render(){
      return(
        <section className="form">
          <h1>Inicio de Sesion</h1>
          <section className="form">
               <Campo caption = "Correo Electronico" value={this.state.email} name="email" onChange={this.onchangeHandler} />
               <Campo caption="Contrasena" type="password" value={this.state.password} name="password" onChange={this.onchangeHandler} />

            <section className="form">
                <Button caption="Iniciar Sesion" onClick={this.onSiginBtnClick}/>
                <Button />
            </section>
          </section>
        </section>
      );
    }
}
