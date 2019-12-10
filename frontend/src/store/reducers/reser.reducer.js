const initialState = {
  reser:[],
  currentPage:1,
  pageLimit:1,
  fetching:false,
  error:'',
  currentId:null,
}

export const RESER_LOADING="RESER_LOADING";
export const RESER_LOADED = "RESER_LOADED";
export const RESER_ERROR = "PRESER_ERROR";
export const RESER_PAGING = "RESER_PAGING";
export const SET_CURRENT_RSV ="SET_CURRENT_RSV";

const reserReducer = ( state = initialState, action={})=>{
  console.log(action);
  switch (action.type) {
    case SET_CURRENT_RSV:
      return {
        ...state,
        currentId: action.payload.id
      }
    case RESER_LOADING:
      return {...state, fetching:true};
    case RESER_LOADED:
       return {
        ...state,
        reser:action.payload.reser,
       fetching: false
       };
    case RESER_PAGING:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        pageLimit: action.payload.pageLimit
      }
      case RESER_ERROR:
        return {
          ...state,
          error: action.payload.error,
          fetching:false,
        }
    default:
        return state;
  }
}

export default reserReducer;