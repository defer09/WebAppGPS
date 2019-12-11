import React, {Component} from 'react';
import Button from '../../../Common/Btns/Button';
import Campo from  '../../../Common/Campo/Campo';
import '../../../Common/Btns/Button.css';

export default class Signin extends Component{
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
        <section>
          <h1 className="tit1">Crear Cuenta</h1>
          <section className="part">
               <Campo caption = "Correo Electronico" value={this.state.email} name="email" onChange={this.onchangeHandler} />
               <Campo caption="Contrasena" type="password" value={this.state.password} name="password" onChange={this.onchangeHandler} />
          </section>
            <section className="btn">
                <Button
                  caption="Crear Cuenta" onClick={this.onSiginBtnClick}
                   />
                   <Button
                     caption="Iniciar Sesion" onClick={this.onSiginBtnClick}
                      />
            </section>

        </section>
      );
    }
}
