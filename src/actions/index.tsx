export const setTotal = (amount: number) => {
  return {
    type: 'SET_TOTAL',
    payload: amount,
  };
};
export const getLocal = (localArray: any[]) => {
  return {
    type: 'GET_LOCAL',
    payload: localArray,
  };
};
export const addItem = (item: {
  name: string;
  img: string[];
  price: string;
  alt: string;
  id: string;
  quantity: string;
}) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};
export const removeItem = (index: number) => {
  return {
    type: 'REMOVE_ITEM',
    payload: index,
  };
};
export const updateQuantityA = (payloadObject: {
  index: number;
  negOrPos: string;
}) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: payloadObject,
  };
};
