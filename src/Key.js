import React, { Component } from 'react'
import KeyUser from './KeyUser'

export default class Key extends Component {
    render() {
        const arr = this.props.numbers;
        const newArr = arr.map( num  => {
            return <KeyUser key={num} value={num} />;
        });
        return (
            <div>
                <ul>{newArr}</ul>
            </div>
        )
    }
}
