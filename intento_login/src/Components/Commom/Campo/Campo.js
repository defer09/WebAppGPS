import React from 'react';

export default ({caption, type, value, name,onChange, ...props}) => {
  return(
    <section>
      <legend>{caption}</legend>
      <input type={type || "text"} value={value || ""} name={name} onChange={(onChange || function(){})} />
    </section>

  );
};
