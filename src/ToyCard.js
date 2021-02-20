import React from 'react';


function ToyCard (props){
    
        return (
            <div className="card">
                <h2>{props.name}</h2>
                <img src={props.image} className="toy-avatar"></img>
                <p>Likes</p>
                <button className="like-btn">LIKE</button>
            </div>
        )
    }


export default ToyCard; 