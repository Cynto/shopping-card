const totalReducer = (state = 0, action: any) => {
  switch(action.type){
    case 'SET_TOTAL':
      const newState = action.payload
      return newState
    default:
      return state
  }
}
export default totalReducer