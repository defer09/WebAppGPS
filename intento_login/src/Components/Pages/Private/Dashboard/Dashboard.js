import React, {Component} from 'react';
import './Dashboard.css';

import ThingBox from './ThingBox';
import DatePanel from './DatePanel';

import logo from './../../../../logo.svg';
import './../../../../App.css';

import { MdAdd as Plus } from 'react-icons/md';

export default class Dashboard extends Component{
  render(){
    return(
      <section className="hom">
        <h1 className="h2">Cartelera Cine React</h1>
          <section className="main cardHolder fix640">
                <p>HOLA MUNDO</p>
          </section>


      </section>
    );
  }
}
