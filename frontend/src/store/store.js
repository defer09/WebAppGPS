import authReducer from './reducers/auth.reducer';
import reserReducer from './reducers/reser.reducer';

function mainReducer(state={}, action={}) {
  const {auth, reser} = state;
  
  return {
    auth: authReducer(auth, action),
    reser: reserReducer(reser, action)
  }
}
export default mainReducer;