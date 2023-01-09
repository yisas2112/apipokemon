import React, { useState } from "react";
import { useAxios } from "../../Hooks/UseAxios";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import CircularProgress from '@mui/material/CircularProgress'
import CardPokemon from "../Card";
import { useSelector, useDispatch } from 'react-redux'
import { useQuery, useMutation } from "react-query";
import axios from 'axios'
import { ReactQueryDevtools} from 'react-query/devtools'
import { useQueryPokemon } from "../../Hooks/useQueryPokemon";


const SearchPokemon = ()=>{  
  // const {data, isloading,error, HandleSubmit} = useAxios()
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemon, setPokemon] = useState("")
  const { data, refetch, status, error } = useQueryPokemon(url, pokemon);



  //UseQuery
  // const fetchPokemon = async () =>{    
  //   let selectedPokemon = pokemon.toLowerCase().trim()
  //   const {data} = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)    
  //   return data
  // }

  // const { data, refetch, status } = useQuery('repoData', ()=>fetchPokemon(),{
  //   refetchOnWindowFocus: false,
  //   enabled: false ,
  //   keepPreviousData: true,
  //   refetchOnMount : false,
  //   refetchInterval : false,
  //   retry : 0    
  //   })  

  

  
  return <>
    <Box component="form" noValidate onSubmit={(e)=>{
      refetch()            
      e.preventDefault()  
      //HandleSubmit(e, pokemon)
      setPokemon("")  
      
    }}>      
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Busca tú pokemon favorito" value={pokemon} onChange={(e)=>{setPokemon(e.target.value)}} />
      </FormControl>
    </Box>     
    {/* Con useAxios */}    
    {/* {isloading && <CircularProgress/>  }
    {error ? <h2>{error}</h2> : ''} 
    {data ? <CardPokemon {...data}/> : ''} */}

    {/* Con useQuery */}
    {status == 'loading' && <CircularProgress/>  }
    {status == 'error' ? <h2>{error.response.data}</h2> : ''} 
    {status == 'success' ? <CardPokemon {...data}/> : ''}
    
    <ReactQueryDevtools/>
  </>
}

export default SearchPokemon