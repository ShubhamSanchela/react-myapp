import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Your Addition Value Is:  {this.props.number}</h1>
            </div>
        )
    }
}
