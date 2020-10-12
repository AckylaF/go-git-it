const INITIAL_STATE = {
  projects: []
}


export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'GET_REPOS':
      return {...state, projects: action.repos };
    default:
      return state
  }
}