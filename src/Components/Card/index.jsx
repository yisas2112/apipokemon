import React from "react";
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


const CardPokemon = (props) =>{
  console.log(props)
  const {name, order, sprites, stats, types} = props
  return <>
    <Avatar 
        alt="Remy Sharp"
        src={sprites?.other.home.front_default}
        sx={{ width: 150, height: 150, p: 2, mx:"auto"  }}
      />
      <Div>Nombre: {name}</Div>
      <Div>Orden: {order}</Div>
      {types &&<Div>Tipo: {types[0].type.name}</Div>} 
  </>

}


export default CardPokemon