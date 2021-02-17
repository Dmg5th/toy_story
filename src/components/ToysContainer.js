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
            image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png"},
        {
            name: "Mr.PotatoHead",
            image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217"
        }
        ]
    }
    render() {
        return (
            <div id="toy-container">
                <ToyCard name="Woody" img="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png" />
                <ToyCard name="BuzzLightyear" img="http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png" />
                <ToyCard name="Mr. PotatoHead" img="https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217" />
            </div>
        )
    }
}

export default ToysContainer; 