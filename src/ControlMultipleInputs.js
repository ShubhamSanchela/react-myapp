import React, { Component } from 'react'

export default class App extends Component {

    state = {
        name : " Shubham",
        password : "Sanchela"
    }

    handleChange = e => {
        // this.setState( {[e.target.name] : e.target.value });
        const value = 
            e.target.name === "password" 
            ? e.target.value.toUpperCase().substr(0, 30)
            : e.target.value;
        this.setState({ [e.target.name] : value })    
    }

    handleSubmit = e => {
        console.log(e.target[1].name);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Name:</label>

                    <input type="text"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    />

                    <br/> <br/>

                    <label>Password:</label>

                    <input type="text"
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    />

                    <br/> <br/>

                    <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }
}
