import React, {Component} from 'react';
import Button from '../../../Common/Btns/Button'
import './Home.css';
import logo from '../../../../logo.svg';
import '../../../../App.css';

export default class Home extends Component{
  render(){
    return(
      <div className='home'>
        <h1>Cine React</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

        <div>&nbsp;</div>
      </div>
    );
  }
}
