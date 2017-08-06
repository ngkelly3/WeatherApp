import { FETCH_WEATHER } from '../actions/index';


// note that we do NOT modify the state directly, return a new array that ha
// the new city added to it / concat'd to it
export default function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
