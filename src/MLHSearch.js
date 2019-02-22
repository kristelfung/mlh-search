import React, { Component } from 'react';
import Input from './Input';
import Hackathon from './Hackathon';
import './scss/styles.scss';

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
        fetch("https://mlh-events.now.sh/na-2018")
        .then(response => response.json())
        .then(hackathons => this.setState({ 
            hackathons: hackathons,
            filteredHackathons: hackathons,
            loading: false
        }));
    }

    filterText = (param) => {
        let newList = this.state.hackathons;
        newList = newList.filter(function(item) {
            if (item.name.toLowerCase().includes(param.toLowerCase())
            || item.location.toLowerCase().includes(
                param.split(' ').join('').toLowerCase())) 
            {
                return item
            }
        })
        this.setState({
            filteredHackathons: newList
        })
    }

    render() {
        const placeholder = "Search name, location, or state code"
        if (this.state.loading) {
        return (
            <div class="loading">
                <div class="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
        }
        return (
            <div className="container">
                <Input filterText={this.filterText} 
                    placeholder={placeholder}
                />
                <div className="row">
                    {
                    this.state.filteredHackathons.map(data =>
                        <Hackathon data={data} key={data.imageUrl}/>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default MLHSearch;