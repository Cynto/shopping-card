const basketReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'GET_LOCAL':
      return [...action.payload];
    case 'ADD_ITEM':
      return [...state, action.payload];

    case 'REMOVE_ITEM':
      return state.filter(
        (item: any, index: number) => index !== action.payload,
      );

    case 'UPDATE_QUANTITY':
      let payloadObject = action.payload;

      const indexToUpdate = payloadObject.index;

      return state.map((item: any, index) => {
        if (index === indexToUpdate) {
          if (payloadObject.negOrPos === '+') {
            item.quantity += 1;
            return item;
          } else {
            item.quantity -= 1;
            return item;
          }
        } else return item;
      });
    default:
      return state;
  }
};
export default basketReducer;
