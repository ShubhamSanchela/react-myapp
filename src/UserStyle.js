import React, { Component } from 'react'
import Styles from './User.module.css';

export default class UserStyle extends Component {
    render() {
    return (
        <>
        <h2 className={this.props.rang}>Hello User</h2>
        <h2 className={Styles.txt}>CSS Module User Example</h2>
        </>
    )

    }
}
