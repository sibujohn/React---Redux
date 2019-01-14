import React from 'react'

class SearchComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search : ""
    }
  }
  handleChange = e =>{
    this.setState({
      search:e.target.value
    })
  }
  triggerSearch = () =>{
    this.props.searchOrder(this.state.search)
  }
  render(){
    return (
      <div>
        <input value={this.state.search} onChange={this.handleChange}/>
        <button onClick={this.triggerSearch}>Search</button>
      </div>
    )
  }
}

export default SearchComponent
