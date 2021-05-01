import React, { Component } from "react";

class Turkey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10&nat=tr")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
            {
                id: `${data.id.name}`,
                firstName: `${data.name.first}`,
                lastName: `${data.name.last}`,
                location: `${data.location.state}, ${data.nat}`,
                thumbnail: `${data.picture.large}`,
            }
        )))
        .then(items => this.setState({
            items, isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
        const {items} = this.state;
            return (
                <div>
                    <h2>Random User From Turkey</h2>
                    <div className="boxWhite">
                        {
                            items.length > 0 ? items.map(item => {
                                const {id, firstName, lastName, location, thumbnail} = item;
                                return (
                                    <div key={id} className="card">
                                        <center><img src={thumbnail} alt={firstName} className="circle"/></center><br/>
                                        <div className="ctr">
                                            {firstName} {lastName} <br/>
                                            {location}
                                        </div>
                                    </div>
                                );
                            }) : null
                        }
                    </div>
                </div>
            );
    }
}

export default Turkey;