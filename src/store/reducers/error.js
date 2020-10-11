const INITIAL_STATE = {
  notFound: false
}


export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_ERROR':
      return {...state, notFound: action.notFound };
    default:
      return state
  }
}