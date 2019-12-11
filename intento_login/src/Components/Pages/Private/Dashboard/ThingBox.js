import React, {Component} from 'react';

export default  ({thingtype, children})=>{
  return(
    <div className={["card", thingtype].join(" ")}>{children}</div>
  );
}
