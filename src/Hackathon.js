import React, { Component } from 'react';

class Hackathon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.data.name}</div>
        )
    }
}

export default Hackathon;