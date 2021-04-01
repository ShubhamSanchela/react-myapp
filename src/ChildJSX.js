import React, { Component } from "react";

// ********Functional Component******
// const Student = props => {
// return <h1>Hello Shubham  {props.children}</h1>
// }

// *********Class Component***********
class Student extends Component {
    render() {
    return( <h1>Hello Shubham  {this.props.children}</h1> )
    }
}

export default Student;