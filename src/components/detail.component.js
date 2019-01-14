import React from 'react'

class DetailComponent extends React.Component{ 
  removeLineItem = (event, item) =>{
    event.stopPropagation();
    this.props.RemoveLineItems(this.props.selectedOrder, item);
  }
  editLineItem = (event, item) =>{
    event.stopPropagation();
    this.props.EditLineItems(item)
  }
  editItemUnits = (event, item) =>{
    event.stopPropagation();
    this.props.UpdateLineUnits(event.target.value, item)
  }
  saveLineUnits = (event, item) =>{
    event.stopPropagation();
    this.props.SaveLineUnits(this.props.selectedOrder, item);
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
                {!item.editMode && <button onClick={e => this.editLineItem(e, item)}>Edit</button>}
                {item.editMode && <button onClick={e => this.saveLineUnits(e, item)}>Save</button>}
              </div>
              <div>
                <div>UOM</div>
                <div>{item.uom}</div>
                <div>Cost</div>
                <div>{item.cost}</div>
                <div>Units</div>
                {item.editMode && <input value={item.unit}
                  onChange={(e)=>this.editItemUnits(e, item)}/>}
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
