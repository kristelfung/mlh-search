import React, { Component } from 'react';
import Search from './Search';
import Hackathon from './Hackathon';

class MLHSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hackathons: [],
            filteredHackathons: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://mlh-events.now.sh/na-2019")
        .then(response => response.json())
        .then(hackathons => this.setState({ 
            hackathons: hackathons,
            filteredHackathons: hackathons,
            loading: false
        }));
    }

    handleFilter = (param) => {
        let newList = this.state.hackathons;
        newList = newList.filter(function(item) {
            if (item.name.toLowerCase().includes(param.toLowerCase())) {
                return item
            }
        })
        this.setState({
            filteredHackathons: newList
        })
    }

    render() {
        if (this.state.loading) {
            return <p>loading</p>;
        }
        return (
            <div>
                <Search handleFilter={this.handleFilter}/>
                {
                  this.state.filteredHackathons.map(data =>
                    <Hackathon data={data} key={data.imageUrl}/>
                  )
                }
            </div>
        );
    }
}

export default MLHSearch;