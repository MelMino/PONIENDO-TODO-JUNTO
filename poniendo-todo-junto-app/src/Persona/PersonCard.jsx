
import React, { Component } from 'react'
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    aumentarEdad = () => {
        this.setState((prevState)=> ({age: prevState.age + 1}));
    }


    render  ()  {
        return (
            <>
                <h3>{this.props.firstName} {this.props.lastName}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.aumentarEdad}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>

            </>
        );

    }
}

export default PersonCard;