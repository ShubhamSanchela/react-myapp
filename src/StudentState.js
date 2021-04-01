import React, { Component } from 'react';

class Student extends Component {

    // Directly
    // state = {
    //     name : "Shubham",
    //     // roll : "101"
    //     //using props
    //     roll : this.props.roll
    // };

    constructor(props){
        super(props);
        this.state = {
            name : "Shubham",
            roll : this.props.roll
        };
    }

    render() {
    return( <h1>Hello, {this.state.name} Your Roll Number : {this.state.roll} </h1> )
    }
}
export default Student;
