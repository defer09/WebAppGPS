import React from 'react';
import Page from '../../utilities/Page';
import {Link} from 'react-router-dom';
import { useStateValue } from '../../utilities/context';
export default (props) => {
  const [, dispatch] = useStateValue();
  return (
    <Page>
      <h1>Crear Cuenta</h1>
      <button onClick={
        (e) => {
          dispatch(
            {
              type: "LOGGED_SUCCESS",
              payload: { jwt: "some", user: { "name": "Fernando" } }
            }
          );
          props.history.replace('/');
        }
      }>Iniciar Sesión</button>
    </Page>
  );
}