import React, { Component } from 'react'

export default class UserLifting extends Component {
    render() {
        return (
            <div>
                <h1>Your Multiplication Value is :  {this.props.number * 20}</h1>
            </div>
        )
    }
}
