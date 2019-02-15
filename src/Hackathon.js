import React from 'react';

const Hackathon = (props) => {
    return (
        <div className="hackathon">
            <div className="hackathon__background">
                <img src={props.data.imageUrl} className="hackathon__image"/>
                <p>{props.data.name}</p>
            </div>
        </div>
    )
}

export default Hackathon;