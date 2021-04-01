import React, { Component } from 'react'
import Marks from './UpdateMarks'

export default class Student extends Component {
    constructor() {
        super();
        this.state = {
            roll : 101
        };
    }

    componentDidMount() {
        console.log("App Mounted");
    }

    componentWillMount() {
        console.log("App Unmounted");
    }

    clickHandle = () => {
        console.log("Button Clicked!!!");
        // this.setState({roll : 105});
        this.setState({roll : this.state.roll + 2});
    };

    render() {
        console.log("Student Rendered");
        return (
            <div>
                <Marks roll={this.state.roll} />
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}
