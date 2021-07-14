const basketReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'GET_LOCAL':
      const localArray = action.payload;
      return localArray;
    case 'ADD_ITEM':
      let newState: any[] = [...state, action.payload];
      
      return newState;
    case 'REMOVE_ITEM':
      let newState2: any[] = [...state];
      newState2.splice(action.payload, 1);
      return newState2;
    case 'UPDATE_QUANTITY':
      let updatedArray: any[] = [...state];
      let payloadObject = action.payload;

      const index = payloadObject.index;
      if (payloadObject.negOrPos === '+') {
        updatedArray[index].quantity = updatedArray[index].quantity + 1;
      } else updatedArray[index].quantity = updatedArray[index].quantity - 1;
      return updatedArray;
    default:
      return state;
  }
};
export default basketReducer;
