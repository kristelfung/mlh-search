import React from 'react';

// changes date from 2018-02-13 form to "Feb 13"
const handleDate = (startDate, endDate, months) => {
    const startMonth = months[startDate.slice(5, 7)-1]; // goes into months array
    const startDay = parseInt(startDate.slice(8, 11));
    const endMonth = months[endDate.slice(5, 7)-1];
    const endDay = parseInt(endDate.slice(8, 11));
    const year = parseInt(startDate.slice(0, 4));
    if (startDay === endDay) { // in case of one day hackathon
        return startMonth + " " + startDay + ", " + year;
    }
    return startMonth + " " + startDay + " - " 
                        + endMonth + " " + endDay + ", " + year;
}

const handleLocation = (location) => {
    location = location.replace(/([a-z])([A-Z])/g, '$1 $2');
    location = location.replace(/,/g, ', ');
    return location;
}

const Hackathon = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="hackathon">
            <a href={props.data.url} className="hackathon__link">
                <div className="hackathon__background">
                    <img src={props.data.imageUrl} 
                        className="hackathon__image"
                        alt={props.data.name}
                    />
                    <div className="hackathon__text">
                        <h2>{props.data.name}</h2>
                        <p className="hackathon__date">
                            {handleDate(props.data.startDate, 
                                            props.data.endDate, months)}
                        </p>
                        <p>
                            {handleLocation(props.data.location)}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Hackathon;