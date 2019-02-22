import React from 'react';

const convertDate = (date) => {
    return 1;
}

const Hackathon = (props) => {
    return (
        <div className="hackathon">
            <a href={props.data.url} className="hackathon__link">
                <div className="hackathon__background">
                    <img src={props.data.imageUrl} className="hackathon__image"/>
                    <div className="hackathon__text">
                        <h2>{props.data.name}</h2>
                        <p className="hackathon__date">
                            {convertDate(props.data.startDate)}
                        </p>
                        <p>{props.data.location}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Hackathon;