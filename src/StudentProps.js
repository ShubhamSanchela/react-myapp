import React, { Component } from "react";
import Pt from "prop-types";

//***Function Component

// const StudentProp = props => {
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h1>Your Rolll: {props.roll}</h1>
//         </div>
//     )
// }


//********Class Component

class StudentProp extends Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>Rolll No: {this.props.roll}</h2>
            </div>
        )
    }
}

StudentProp.propTypes = {
    name : Pt.string.isRequired,
    roll : Pt.number
}

StudentProp.defaultProps = {
    name : "React JS"
}

export default StudentProp;