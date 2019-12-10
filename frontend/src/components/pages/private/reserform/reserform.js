import React from 'react';
import Page from '../../../utilities/Page';
import {useStateValue} from '../../../utilities/context';


export default (props)=>{
  const [ {rsv}, dispatch] = useStateValue();
  if(!rsv.currentId && true){
      rsv.history.replace("/reser");
  }else{
  const CurrenRsv = rsv.reser.filter((o)=>{
    return o._id === rsv.currentId;
  })[0];
  return (
    <Page>
      <h1>Mostrando Reservaciones</h1>
      <span><b>SKU</b></span>
      <span>{CurrenRsv.sku}</span>
      <span><b>Producto</b></span>
      <span>{CurrenRsv.title}</span>
      <span><b>Inventario</b></span>
      <span>{CurrenRsv.price}</span>
    </Page>
  );
  }
}