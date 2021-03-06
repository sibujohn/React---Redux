import React, { Component }from 'react'
import { connect } from 'react-redux'

import { 
  RequestOrders,
  RequestLineItems,
  SelectOrder,
  SearchOrder,
  ToggleLineItemMode,
  SearchLineItems,
  SelectLineItems,
  UnSelectLineItems,
  SaveLineItems,
  RemoveLineItems,
  EditLineItems,
  UpdateLineUnits,
  SaveLineUnits } from '../actions/home.actions'

import UserComponent from '../components/user.component'
import SearchComponent from '../components/search.component'
import ListComponent from '../components/list.component'
import LineItemComponent from '../components/lineitem.component'

class HomeComponent extends Component{
  componentWillMount(){
    this.props.RequestOrders()
    this.props.RequestLineItems()
  }
  getFilteredList = () => {
    if(this.props.orders){
      if(this.props.searchText){
        return this.props.orders.filter(order => order.ordernumber.toUpperCase().startsWith(this.props.searchText.toUpperCase()))
      }
      return this.props.orders
    }
    return []
  }
  getFilteredLineList = () => {
    if(this.props.lineItems){
      if(this.props.searchLine){
        return this.props.lineItems.filter(line => line.uom.toUpperCase().startsWith(this.props.searchLine.toUpperCase()))
      }
      return this.props.lineItems
    }
    return []
  }
  toggleLineItemMode = (mode) =>{
    if(!mode){
      this.props.SaveLineItems(this.props.selectedOrder, this.props.selectedLines)
    }
    this.props.ToggleLineItemMode(mode)
  }
  render(){
    return (
      <div >
        <div className="app-header">
          <div className="app-main-header">
            <div className="d-flex app-toolbar align-items-center justify-content-between">
              <UserComponent/>
              <SearchComponent searchText={this.props.searchText} searchOrder={this.props.SearchOrder}/>
            </div>
          </div>
        </div>
        <div className="app-main-content d-flex flex-row">
          <section className="content-left">
            <ListComponent orders={this.getFilteredList()} selectOrder={this.props.SelectOrder} selectedOrder={this.props.selectedOrder || (this.props.orders && this.props.orders[0])}/>
          </section>
          <section className="content-right d-flex flex-column border">
            <LineItemComponent 
              selectedOrder={this.props.selectedOrder || (this.props.orders && this.props.orders[0])}
              lineItems={this.getFilteredLineList()}
              toggleLineItemMode={this.toggleLineItemMode}
              lineItemMode={this.props.lineItemMode}
              searchLineItems={this.props.SearchLineItems}
              RemoveLineItems={this.props.RemoveLineItems}
              EditLineItems={this.props.EditLineItems}
              UpdateLineUnits={this.props.UpdateLineUnits}
              SaveLineUnits={this.props.SaveLineUnits}
              
              selectedLines = {this.props.selectedLines}
              SelectLineItems = {this.props.SelectLineItems}
              UnSelectLineItems = {this.props.UnSelectLineItems}/>
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.homeState.componentState
})

const mapDispatchToProps = dispatch => ({
  RequestOrders : RequestOrders(dispatch),
  RequestLineItems : RequestLineItems(dispatch),
  SelectOrder : SelectOrder(dispatch),
  SearchOrder : SearchOrder(dispatch),
  ToggleLineItemMode : ToggleLineItemMode(dispatch),
  SearchLineItems : SearchLineItems(dispatch),
  SaveLineItems : SaveLineItems(dispatch),
  RemoveLineItems : RemoveLineItems(dispatch),
  EditLineItems : EditLineItems(dispatch),
  SelectLineItems : SelectLineItems(dispatch),
  UnSelectLineItems : UnSelectLineItems(dispatch),
  UpdateLineUnits : UpdateLineUnits(dispatch),
  SaveLineUnits : SaveLineUnits(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)