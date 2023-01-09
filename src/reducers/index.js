import {combineReducers} from 'redux'
import { pokemonReducer } from './pokemonReducers'

export const reducers = combineReducers({
  pokemon : pokemonReducer
})