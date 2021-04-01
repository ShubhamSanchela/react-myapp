import React, { Component } from 'react'

export default class App extends Component {


    constructor(props){
        super(props);
        //creating ref
        this.textInput = React.createRef();

        this.state = {
            value : ""
        }
    }

    // componentDidMount = () => {
    //     console.log(this.textInput);
    //     this.textInput.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value : this.textInput.current.value });
    }

    render() {
        return (
            <div>

        <h2>You Type : {this.state.value} </h2>

                <form onSubmit={this.handleSubmit} >

                Input : <input type="text" ref={this.textInput} />
                <input type="submit" value="Submit"/>

                {/* <br/><br/>
                Name: <input type="text"/>
                <br/> <br/>
                Password: <input type="text" ref={this.textInput} />
                <br/><br/>
                Adress: <input type="text"/> */}

                </form>
            </div>
        )
    }
}
