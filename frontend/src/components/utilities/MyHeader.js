import React from 'react';
import { Link } from 'react-router-dom';

const MyHeader = ({title}) =>{
  return (
    <header>
      <nav>
      <h1 style={styles.h1}>{title}</h1>
      </nav>
      

    </header>
  );
}

const styles = {
  h1:{
    backgroundColor:"#4EA237",
    color:"#FFF",
    textAlign:"left",
    fontSize:"21px",
    padding:"16px",
    margin:"0px",
  }
}

export default MyHeader;