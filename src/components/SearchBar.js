import React, { Component } from 'react'

class SearchBar extends Component {

    handleSubmit = (e) => {
        e.preventDefault(); 
        const value = e.target["toy-input"].value
        this.props.searchValue(value)
    }
     
    
    render() {
       
        return (
            <div id="search-bar">
               <form onSubmit={this.handleSubmit} >
                   <input name="toy-input"/>
                   <button value="Search!">Search!</button>
                 </form>
            </div>
        )
    }
}

export default SearchBar; 
