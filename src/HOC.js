import React, { Component } from 'react'
import Shubham from './Shubham'
import Sonam from './Sonam'

export default class HOC extends Component {
    render() {
        return (
            <div>
                <Shubham  camp={120}/>
                <Sonam camp={140}/>
            </div>
        )
    }
}
