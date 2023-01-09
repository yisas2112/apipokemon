import { useState } from "react";
import axios from "axios";

export const useAxios = ()=>{
  const [data, setData] = useState()
  const [isloading, setIsloading] = useState(false)
  const [error, setError] = useState("")

  const HandleSubmit = async (e, pokemon) => {
    e.preventDefault()
    setData(null)
    setError(false)
    setIsloading(true)
    
    try {
      let selectedPokemon = pokemon.toLowerCase().trim()
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      setData(data)      
    } catch (error) {
      setError('Pokemon no encontrado')
    }

    setIsloading(false)
  }

  return {HandleSubmit, isloading, error,data}
} 
