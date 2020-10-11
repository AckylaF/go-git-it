const INITIAL_STATE = {
  username: ''
}


export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'FIND_USER':
      return {...state, username: action.value };
    default:
      return state
  }
}