import React  from 'react';
import Page from '../../../utilities/Page';
import {useStateValue} from '../../../utilities/context';
import { loadReser } from './reser.actions';
import { Link } from 'react-router-dom';

import './reser.css';

const ReserItem = (item)=>{
  return (
    <span key={item._id}>
      {item.reser}
      <Link to={`/reserform/${item._id}`}>  </Link>
    </span>
  )
}

const ReserItemV2 = (item, handler) => {
  return (
    <span key={item._id}>
      {item.reser}
      <button onClick={(e)=>{e.preventDefault();e.stopPropagation();handler(item._id);}}> </button>
    </span>
  )
}

export default (props)=>{
    const [{rsv}, dispatch] = useStateValue();
    if(rsv.reser.length === 0){
      loadReser(1,10,dispatch);
    }
    
    const clickHandler = (id)=>{
      dispatch({
        type:"SET_CURRENT_RVS",
        payload:{id:id}
      }
      );
      props.history.push("/reserform");
    }

    const renderRsv = rsv.reser.map((o)=>{
      //return ProdsItem(o);
      return ReserItemV2(o, clickHandler);
    })
    return(<Page title="Reser" showFooter={false}>
      <h1>Datos de las reservaciones</h1>
      <section className="List">
        {renderRsv}
      </section>
    </Page>);
}