// import React, { Component } from "react";

//**************Function Component*************
// // const Student = props => {
// //     return <h1>Hello {props.name}</h1>
// // }

//***********Class Component*************
// class Student extends Component {
//     render() {
//         return(
//         <h1>Hello {this.props.name}</h1>
//         )
//     }
// }
// export default Student


//***************Composite componenet************

import React from "react";

const Student = props => {
    return <h1>Hello {props.name}</h1>;
};

export default Student;