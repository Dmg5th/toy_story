import React from 'react';
import ToyCard from '../ToyCard';

class ToysContainer extends React.Component {

    state = {
        toys: [{
            name: "Woody",
            image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
        },
        {
            name: "BuzzLightyear",
            image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png"
        },
        {
            name: "Mr.PotatoHead",
            image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217"
        }
        ]
    }

    renderToys = () => {
        if (this.props.search === '') {
            return this.state.toys.map(toyObj => <ToyCard name={toyObj.name} key={toyObj.name} image={toyObj.image}/> )
        } else {
            return this.state.toys.filter(toyObj => toyObj.name.includes(this.props.search)).map(toyObj => <ToyCard name={toyObj.name} key={toyObj.name} image={toyObj.image}/>)
        }
    }

       
    
    render() {
        
        return (
           <div id="toy-container">
               {this.renderToys()}
          </div>
        )

    }

}

export default ToysContainer; 




