import React, { Component } from 'react'
import Student from './StudentMount'

export default class App extends Component {

    constructor(props) {
        super(props);
        console.log("APP - Constructor Called");
        console.log(props);

        this.state = {
            roll : "101"
        };
    }

    static getDerivedStateFromProps(props , state) {
        console.log("App - Get Derived");
        console.log(props , state);
        return null;
    }

    componentDidMount() {
        //Get Data from Server and set the data to the State
        console.log("App - componentDidMount - Mounted");
    }

    render() {
        console.log("App -Rendered")
        return (
            <div>
                <Student name="Rahul" />
            </div>
        )
    }
}
