import React from 'react'

class DetailComponent extends React.Component{
  render(){
    return (
      <div>
        { this.props.selectedOrder && this.props.selectedOrder.lineItems
          && this.props.selectedOrder.lineItems.map((item, index) => 
            <div key={index}>
              <div>
                <div>Name</div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
              <div>
                <div>UOM</div>
                <div>{item.uom}</div>
                <div>Cost</div>
                <div>{item.cost}</div>
                <div>Units</div>
                <div>{item.unit}</div>
                <div>Description</div>
                <div>{item.desc}</div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default DetailComponent
