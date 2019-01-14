import React from 'react'

class AddComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchLine : ""
    }
  }
  updateSearchLine = e =>{
    this.setState({
      searchLine:e.target.value
    })
  }
  triggerLineSearch = () =>{
    this.props.searchLineItems(this.state.searchLine)
  }
  toggleSelectLine = (event, item) =>{
    event.stopPropagation();
    if(event.target.checked){
      this.props.SelectLineItems(this.props.selectedLines, item)
    }
    else{
      this.props.UnSelectLineItems(this.props.selectedLines, item)
    }
  }
  render(){
    return (
      <div>
        <div>
          <input value={this.state.searchLine} onChange={this.updateSearchLine}/>
          <button onClick={this.triggerLineSearch}>Search</button>
        </div>
        { this.props.lineItems && this.props.lineItems.map((item, index) => 
            <div key={index}>
              <div>
                <input type="checkbox" onClick={e => this.toggleSelectLine(e, item)}/>
                <div>Item Name</div>
                <div>{item.uom}</div>
                <div>{item.desc}</div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default AddComponent
