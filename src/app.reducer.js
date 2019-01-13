import { combineReducers } from 'redux'

import HomeReducer from './home/home.reducer'

const AppReducer = combineReducers({
  homeState : HomeReducer
})

export default AppReducer
