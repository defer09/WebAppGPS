import { authAxios } from "../../../utilities/MyAxios";
import { RESER_LOADED, RESER_ERROR } from "../../../../store/reducers/reser.reducer";

export const loadReser = (page=1, limit=10, dispatch)=>{
    authAxios.get("/api/rsv/all")
    .then( (response)=>{
      console.log(response);
      if (response.status === 200){
        dispatch(
          {
            type:RESER_LOADED,
            payload:{
              reser: response.data
            }
          }
        );
      }else {
        dispatch(
          {
            type:RESER_ERROR,
            payload:{error:'Error al cargar reservaciones'}
          }
        );
      }
    })
    .catch( (error)=>{
      console.log(error);
      dispatch(
        {
          type: RESER_ERROR,
          payload: { error: 'Error al cargar reservaciones' }
        }
      );
    })
    ;
}