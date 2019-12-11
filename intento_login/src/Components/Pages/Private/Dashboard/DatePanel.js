import React, {Component} from 'react';

export default ({currentDate, dateBeforeHandler, dateAfterHandler})=>{
      if(!currentDate){currentDate = new Date() }
          if(!dateBeforeHandler) {dateBeforeHandler = ()=>{} }
          if(!dateAfterHandler) {dateAfterHandler = ()=>{} }
    return(
      <div className="datePanel">
        <span onClick={dateBeforeHandler}>&lt;--</span>
        <span>{currentDate.getYear()}-{currentDate.getMonth()+1}-{currentDate.getDay()}</span>
        <span onClick={dateAfterHandler}>--&gt;</span>
      </div>
    )
}
