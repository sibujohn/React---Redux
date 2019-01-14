import { combineReducers } from 'redux'

import { HomeAction } from './home.actions'

function removeSelectedLines(selectedLines, item){
  return selectedLines.filter(line => {
    return line.id === item.id
  })
}
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
          ...state, selectedOrder:action.order, selectedLines:[]
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
          ...state,
          selectedLines: [...state.selectedLines, action.item]
        }
      case "UNSELECT_LINE_ITEMS":
        return {
          ...state, selectedLines : state.selectedLines.filter(item => item.productid !== action.item.productid)
        }
      case "SAVE_LINE_ITEMS":
        return {
          ...state, selectedOrder:action.selectedOrder
        }
      case "EDIT_LINE_ITEMS":
        let editLineItems = state.selectedOrder.lineItems.map(item => {
          if(item.productid === action.item.productid){
            item.editMode = true;
          }
          return item;
        })
        return {
          ...state,
          selectedOrder: {
            ...state.selectedOrder, lineItems: editLineItems
          }
        }      
      case "UPDATE_LINE_UNITS":
        let updateLineItems = state.selectedOrder.lineItems.map(item => {
          if(item.productid === action.item.productid){
            item.unit = action.unit;
          }
          return item;
        })
        return {
          ...state,
          selectedOrder: {
            ...state.selectedOrder, lineItems: updateLineItems
          }
        }
      case "REMOVE_LINE_ITEMS":
        return {
          ...state, selectedOrder:action.selectedOrder
        }
      default:
        return state
    }
}

const HomeReducer = combineReducers({
  componentState : ComponentReducer,
})

export default HomeReducer