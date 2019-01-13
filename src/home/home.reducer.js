import { combineReducers } from 'redux'

import { HomeAction } from './home.actions'

const ComponentReducer = (state = { }, action) => {
    switch (action.type) {
      case HomeAction:
        return state
      case "FETCH_ORDERS_SUCCESS":
        return {
          ...state, orders:action.orders
        }      
      case "FETCH_LINE_ITEMS_SUCCESS":
        return {
          ...state, lineItems:action.lineItems
        }
      case "SELECT_ORDER":
        return {
          ...state, selectedOrder:action.order
        }
      case "SEARCH_ORDER":
        return {
          ...state, searchText:action.searchText
        }
      case "SEARCH_LINE_ITEMS":
        return {
          ...state, searchLine:action.searchLine
        }
      case "TOGGLE_LINE_ITEM_MODE":
        return {
          ...state, lineItemMode:action.lineItemMode
        }
      case "SELECT_LINE_ITEMS":
        return {
          ...state, item:action.item
        }
      case "UNSELECT_LINE_ITEMS":
        return {
          ...state, item:action.item
        }
      case "ADD_LINE_ITEMS":
        return {
          ...state, order:action.order, item:action.item
        }
      case "REMOVE_LINE_ITEMS":
        return {
          ...state, order:action.order, item:action.item
        }
      default:
        return state
    }
}

const HomeReducer = combineReducers({
  componentState : ComponentReducer,
})

export default HomeReducer