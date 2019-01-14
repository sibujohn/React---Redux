import React from 'react'

class ListComponent extends React.Component{
  render(){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Order No:</td>
              <td>Date</td>
              <td>Zip</td>
              <td>State</td>
              <td>Created By</td>
              <td>Picked</td>
              <td>Shipped</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.orders && this.props.orders.map((order, index) => 
                <tr key={index} onClick={() => this.props.selectOrder(order)}>
                  <td>{order.ordernumber}</td>
                  <td>{order.date}</td>
                  <td>{order.zip}</td>
                  <td>{order.state}</td>
                  <td>{order.createdBy}</td>
                  <td>{order.picked}</td>
                  <td>{order.shipped}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListComponent
