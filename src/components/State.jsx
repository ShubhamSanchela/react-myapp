import React, { Component } from 'react'

export default class State extends Component {
    state = {
        name : "Shubham",
        roll : this.props.roll
    }
    render() {
        return (
            <div>
                Hello {this.state.name} and my rollno : {this.state.roll}
            </div>
        )
    }
}
