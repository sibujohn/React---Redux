import { HOME_ACTION } from './home.constants'

export const HomeAction = payload => ({
  type: HOME_ACTION,
  payload
})

export const RequestOrders = dispatch => {
  return name => {
    dispatch ({
      type:"FETCH_ORDERS"
    })
    fetch('https://private-5068a4-react21.apiary-mock.com/userlist/list')
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      dispatch ({
        type:"FETCH_ORDERS_SUCCESS",
        orders : response
      })
    })
    .then(function(myJson) {
      dispatch ({
        type:"FETCH_ORDERS_FAILURE",
        error : "Error Message"
      })
    });
  }
}

export const RequestLineItems = dispatch => {
  return name => {
    dispatch ({
      type:"FETCH_LINE_ITEMS"
    })
    fetch('https://private-5068a4-react21.apiary-mock.com/userlist/linelist')
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      dispatch ({
        type:"FETCH_LINE_ITEMS_SUCCESS",
        lineItems : response
      })
    })
    .then(function(myJson) {
      dispatch ({
        type:"FETCH_LINE_ITEMS_FAILURE",
        error : "Error Message"
      })
    });
  }
}

export const SelectOrder = dispatch => {
  return order => {
    dispatch ({
      type:"SELECT_ORDER",
      order : order
    })
  }
}

export const ToggleLineItemMode = dispatch => {
  return lineItemMode => {
    dispatch ({
      type:"TOGGLE_LINE_ITEM_MODE",
      lineItemMode : lineItemMode
    })
  }
}

export const SearchOrder = dispatch => {
  return searchText => {
    dispatch ({
      type:"SEARCH_ORDER",
      searchText : searchText
    })
  }
}

export const SearchLineItems = dispatch => {
  return searchLine => {
    dispatch ({
      type:"SEARCH_LINE_ITEMS",
      searchLine : searchLine
    })
  }
}

export const SelectLineItems = dispatch => {
  return (item) => {
    dispatch ({
      type:"SELECT_LINE_ITEMS",
      item : item
    })
  }
}

export const UnSelectLineItems = dispatch => {
  return (item) => {
    dispatch ({
      type:"UNSELECT_LINE_ITEMS",
      item : item
    })
  }
}

export const AddLineItems = dispatch => {
  return (order, item) => {
    dispatch ({
      type:"ADD_LINE_ITEMS",
      order : order,
      item : item
    })
  }
}

export const RemoveLineItems = dispatch => {
  return (order, item) => {
    dispatch ({
      type:"REMOVE_LINE_ITEMS",
      order : order,
      item : item
    })
  }
}