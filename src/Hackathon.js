import React from 'react';

const Hackathon = (props) => {
    return (
        <div className="hackathon">
            <div className="hackathon__background">
                <img src={props.data.imageUrl} className="hackathon__image"/>
                <div className="hackathon__text">
                    <h2>{props.data.name}</h2>
                    <p>{props.data.startDate}</p>
                    <p>{props.data.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Hackathon;