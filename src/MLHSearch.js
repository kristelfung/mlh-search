import React, { Component } from 'react';
import Hackathon from './Hackathon';

class MLHSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hackathons: [],
            filteredHackathons: [],
            loading: false
        };
    }

    componentWillMount() {
        this.setState({ loading: true });
        fetch("https://mlh-events.now.sh/na-2019")
        .then(response => response.json())
        .then(hackathons => this.setState({ 
            hackathons: hackathons,
            filteredHackathons: hackathons,
            loading: false
        }));
    }

    render() {
        if (this.state.loading) {
            return <p>loading</p>;
        }
        return (
            <div className="App">
                {
                  this.state.hackathons.map(data =>
                    <Hackathon data={data} key={data.name}/>
                  )
                }
            </div>
        );
    }
}

export default MLHSearch;

/*
{
    this.state.filtered.map(info => 
        <p>{info.name}</p>
    )
}
*/