import React, { Component } from 'react'

export default class InlineStyle extends Component {

    state = {
        chnage : false
    }

    clickHandle = () => {
        this.setState({chnage: true})
    }

    render() {

        const btnStyleState = {
            color : "blue",
            background : "yellow"
        }

        if (this.state.chnage) {
            btnStyleState.background = "white";
        }

        const btnStyle = {
            color : "red",
            background : "black"
        }

        const txtc = {
            color : "blue"
        }

        const txts = {
            fontSize : "80px"
        }

        return (
            <div>
                <button style={btnStyle}>Button</button> <br/> <br/>
                <button onClick={this.clickHandle} style={btnStyleState}>Button</button>
                <h1 style={{ ...txts, ...txtc, ...{ background : "red" } }}>Hello React Application</h1>
            </div>
        )
    }
}
