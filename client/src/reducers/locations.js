import axios from 'axios';
import { setFlash } from './flash';

export const fetchLocations = (type) => {
  return (dispatch) => {
    axios.get(`/api/locations?nerd_type=${type}`)
      .then( res => {
        dispatch({ type: 'SET_LOCATIONS', locations: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash("Error fetching locations", "red"))
      })
  }
}

export const deleteLocation = (id) => {
  return (dispatch) => {
    axios.delete(`/api/locations/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_LOCATION', location: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash( "Error deleting location", "red" ))
      })
  }
}

export const updateLocation = (location, id) => {
  return (dispatch) => {
    axios.put(`/api/locations/${id}`, { location } )
      .then( res => {
        dispatch({ type: 'UPDATE_LOCATION', location: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash('Error updating location', 'red'))
      })
  }
}

const locations = (state = [], action) => {
  switch(action.type) {
    case 'SET_LOCATIONS':
      return action.locations;
      //return state.filter(location => location.nerdtype !== action.type )
    case 'DELETE_LOCATION':
      return state.filter(location => location.id !== action.location.id )
    case 'UPDATE_LOCATION':
      return state.map( l => {
        if (l.id === action.location.id)
          return action.location
        else
          return l
      })
    default:
      return state;
  }
}

export default locations;

