import React, { Component } from 'react';

class DestinationSection extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        let destArr = this.props.tripDestinations || [];
        let mappedDestinations = destArr.map( (item, idx) => {
            return <p key={idx}>{item.landmark} {item.city}, {item.state} ({item.country})</p>
        });
            return (
                <div className="DestinationContent">
                    {mappedDestinations}
                </div>
            )
        }
}


export default DestinationSection;