import React, { Component } from 'react'

class Student extends Component {
constructor(props){
    super (props);
    this.state = {
        name : "Shubham",
        roll : this.props.roll
    };
}
 
// ******State As a Object*******
// handleClick = () => {
//     console.log("Button Clicked",this);
//     this.setState({name : "Rahul" , roll : "105"})
// };

handleClick = () => {
    this.setState((state , props) => {
        console.log(state.name);
    }) 
}

render() {
    return(
        <div>
            <h1>Hello React Application</h1>
            <h1>
                Hello , {this.state.name} Your Roll Number : {this.state.roll}
            </h1>
            <button onClick={this.handleClick}>Click Me!!!</button>
        </div>
    )
}
}
export default Student