import React, { Component } from 'react'
import GuestApi from './GuestApi'

export default class UserApi extends Component {
    render() {
        return (
            <div>
                <h3>User Component</h3>
                <GuestApi />
            </div>
        )
    }
}
