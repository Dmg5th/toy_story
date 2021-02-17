import React, { Component } from 'react'
import ToyHeader from './components/ToyHeader'
import SearchBar from './components/SearchBar'
import ToysContainer from './components/ToysContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ToyHeader/>
                <SearchBar/>
                <ToysContainer/>
            </div>
        )
    }
}

export default App; 

