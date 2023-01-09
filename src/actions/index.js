import axios from 'axios'
import { IS_FETCHING, ERROR, SUCCESS } from '../types'

export const fetchPokemon =(e,pokemon)=>{  
  e.preventDefault();
  async(dispatch) =>{
    

    dispatch({type : IS_FETCHING})

    try {
      let selectedPokemon = pokemon.toLowerCase().trim()
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      setData(data)      

      dispatch({
        type: SUCCESS,
        payload : data 
      })
    }catch(error){
      dispatch({type : ERROR}) 
    }    

  }

}