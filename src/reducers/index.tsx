import totalReducer from './total'
import basketReducer from './basket'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  totalAmount: totalReducer,
  basketArray: basketReducer,
})
export default allReducers