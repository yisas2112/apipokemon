import axios from "axios";
import { useQuery } from "react-query";

const fetchPokemon = async(url, pokemon)=>{    
  const selectedPokemon = pokemon.toLowerCase().trim()
  const {data} = await  axios.get(url + selectedPokemon)
  console.log(data)
  return data
}


export const useQueryPokemon = (url,pokemon) => {  
  return useQuery("pokemon", ()=>fetchPokemon(url,pokemon), {
    refetchOnWindowFocus: false,
    enabled: false ,
    keepPreviousData: true,
    refetchOnMount : false,
    refetchInterval : false,
    retry : 0    
  })
}