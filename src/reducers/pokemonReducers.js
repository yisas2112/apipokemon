import { ERROR, SUCCESS, IS_FETCHING  } from "../types"

export const initialState = {
  data: "",
  isloading : false,
  error : false
}


export const pokemonReducer = (state = initialState, action) =>{
  switch(action.type){
    case IS_FETCHING:
      return {
        isloading : true, 
        data : null,
        error: false
      }
    case SUCCESS:
      return {
        ...state,
        isloading : false,
        data: action.payload,
      }
    case ERROR:
      return {
        ...state,
        isloading : false,
        error : "Pokemon no encontrado"
      }
    default :
      return {
        ...state
      }
  }
}

