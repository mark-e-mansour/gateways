import { combineReducers } from 'redux'
import gateways from './gateways'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  gateways,
  loadingBar: loadingBarReducer,
})