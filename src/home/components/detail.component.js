import React from 'react'

class DetailComponent extends React.Component{ 
  removeLineItem = (event, item) =>{
    event.stopPropagation();
  }
  editLineItem = (event, item) =>{
    event.stopPropagation();
    // this.props.EditLineItems(item)
  }
  render(){
    return (
      <div>
        { this.props.selectedOrder && this.props.selectedOrder.lineItems
          && this.props.selectedOrder.lineItems.map((item, index) => 
            <div key={index}>
              <div>
                <div>Name</div>
                <button onClick={e => this.removeLineItem(e, item)}>Delete</button>
                <button onClick={e => this.editLineItem(e, item)}>Edit</button>
              </div>
              <div>
                <div>UOM</div>
                <div>{item.uom}</div>
                <div>Cost</div>
                <div>{item.cost}</div>
                <div>Units</div>
                {item.editMode && <input value={item.unit}/>}
                {!item.editMode && <div>{item.unit}</div>}
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
