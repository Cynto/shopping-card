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
      let payloadObject = { ...action.payload };

      const indexToUpdate = payloadObject.index;

      return state.map((item: any, index) => {
        if (index === indexToUpdate) {
          if (payloadObject.negOrPos === '+') {
            return { ...item, quantity: (item.quantity += 1) };
          } else return { ...item, quantity: (item.quantity -= 1) };
        }
      });
    default:
      return state;
  }
};
export default basketReducer;
