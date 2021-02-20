import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        search: ""
    }
    
    handleChange = (e) => {
      this.setState({
          search: e.target.value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        let value = e.target["toy-input"].value;
        let search = this.props.searchValue(value)
        this.setState({
            search:""
        })
    }
     
    
    render() {
        return (
            <div id="search-bar">
               <form onSubmit={this.handleSubmit}>
                   <input name="toy-input" onChange={this.handleChange} type="text" value={this.state.search}/>
                   <button value="Search!">Search!</button>
                   <div>{this.props.term}</div>
               </form>
            </div>
        )
    }
}

export default SearchBar; 
