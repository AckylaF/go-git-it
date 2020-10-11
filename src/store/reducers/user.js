const INITIAL_STATE = {
  profile: {}
}


export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_USER':
      return {...state, profile: action };
    default:
      return state
  }
}