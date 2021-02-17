import React from 'react';


class ToyCard extends React.Component {
    render() {
        return (
            <div class="card">
                <h2>{this.props.name}</h2>
                <img src={this.props.img} class="toy-avatar"></img>
                <p>Likes</p>
                <button class="like-btn">LIKE</button>
            </div>
        )
    }
}

export default ToyCard; 