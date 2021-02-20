import React, { Component } from 'react'
import ToyHeader from './components/ToyHeader'
import SearchBar from './components/SearchBar'
import ToysContainer from './components/ToysContainer';


class App extends Component {

    state= {
        search:""
    }

    searchValue = string =>{
        console.log(string)
        this.setState({ search: string }, () => console.log(this.state))
    }
    
    render() {
        return (
            <div className="App">
                <ToyHeader/>
                <SearchBar searchValue={this.searchValue} />
                <ToysContainer search={this.state.search} />
            </div>
        )
    }
}

export default App; 

