import React, { Component } from 'react'
import Guest from './Guest'
import UserLifting from './UserLifting'

export default class App extends Component {

    state = {
        name : "Hello React Application",
        value : 20
    }

    render() {
        return (
            <div>
                <Guest number = {this.state.value}/>
                <UserLifting number = {this.state.value} />   
            </div>
        )
    }
}
