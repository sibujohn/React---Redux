import React from 'react'

class UserComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      customerName : "Customer Name"
    }
  }
  render(){
    return (
      <div>
        {this.state.customerName}
      </div>
    )
  }
}

export default UserComponent
