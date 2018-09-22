import axios from 'axios';
import { setFlash } from './flash';

export const fetchCharacters = (type) => {
  return (dispatch) => {
    axios.get(`/api/characters?nerd_type=${type}`)
      .then( res => {
        dispatch({ type: 'SET_CHARACTERS', characters: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash("Error fetching characters", "red"))
      })
  }
}

export const deleteCharacter = (id) => {
  return (dispatch) => {
    axios.delete(`/api/characters/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_CHARACTER', character: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash( "Error deleting character", "red" ))
      })
  }
}

export const updateCharacter = (character, id) => {
  return (dispatch) => {
    axios.put(`/api/characters/${id}`, { character } )
      .then( res => {
        dispatch({ type: 'UPDATE_CHARACTER', character: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash('Error updating character', 'red'))
      })
  }
}

const characters = (state = [], action) => {
  switch(action.type) {
    case 'SET_CHARACTERS'://additional filtering?
      return action.characters;
      //return state.filter(character => character.nerdtype !== action.type )
    case 'DELETE_CHARACTER':
      return state.filter(character => character.id !== action.character.id )
    case 'UPDATE_CHARACTER':
      return state.map( c => {
        if (c.id === action.character.id)
          return action.character
        else
          return c
      })
    default:
      return state;
  }
}

export default characters;

