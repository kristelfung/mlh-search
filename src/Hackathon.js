import React from 'react';

const Hackathon = (props) => {
    return (
        <div class="hackathon">
            <img src={props.data.imageUrl} className="hackathon__image"/>
            <p>{props.data.name}</p>
        </div>
    )
}

export default Hackathon;