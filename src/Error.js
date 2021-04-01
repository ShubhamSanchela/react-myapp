import React, { Component } from 'react'

export default class Error extends Component {

    state = {
        hasError : false
    }

    static getDerivedStatefromError(error){
        return { hasError : true };
    }

    render() {

        if(this.state.hasError){
            return <h3>Error : Image not Found</h3>
        }

        return this.props.children;
    }
}
