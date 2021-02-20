import React, { Component } from 'react'
import ToyHeader from './components/ToyHeader'
import SearchBar from './components/SearchBar'
import ToysContainer from './components/ToysContainer';


class App extends Component {

    state= {
        search:""
    }

    changeStateValue = string =>{
        this.setState({
            search: string
        })
    }
    
    render() {
        return (
            <div className="App">
                <ToyHeader/>
                <SearchBar />
                <ToysContainer search={this.state.search} searchValue={this.searchValue}/>
            </div>
        )
    }
}

export default App; 

