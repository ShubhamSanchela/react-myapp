import React, { Component } from 'react'

export default class Form extends Component {

    state = {
    value : "Shubham",
    txtvalue : "Here are some values for text area!!"
    }

    handleChange = (e) => {
        this.setState({ value : e.target.value.toUpperCase().substr(0 , 10) }) 
        console.log(e.target.value);
    }

    handletxtChange = (e) => {
        this.setState({ txtvalue : e.target.txtvalue });
        console.log(e.target.txtvalue);
    }

    render() {
        return (
            <div>
               <form action="">

                   <h1>Controlled By React</h1>

                   <input 
                   type="text" 
                   value={this.state.value} 
                   onChange={this.handleChange}
                   /> <br/> <br/>

                    <textarea value={this.state.txtvalue} onChange={this.handletxtChange} />

                </form> 
            </div>
        )
    }
}
