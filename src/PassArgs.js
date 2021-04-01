import React, { Component } from 'react'

class Student extends Component {
    state = {
        id : 1,
        name : "Shubham"
    }

    handleClick = (id,j,e) => {
        console.log(id);
        console.log(j);
        console.log(e);
    }

    // this can also be return in <button>
    // handleClickArg = e => {
    //     this.handleClick(this.state.id, "101", e);
    // }

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={e => {
                     this.handleClick(this.state.id, "101", e);
                     }}>
        Click Me!!!!
        </button>
            </div>
        )
    }
}
export default Student;