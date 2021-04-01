import React from 'react'

// *********Class Componenet***********
// class Student extends Component {

//     constructor(props) {
//         super (props);
//         this.state = {
//             name : "Shubham",
//             roll : this.props.roll
//         };
//     }

//     handleClick = () => {
//         console.log("Button Clicked", this);
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Hello,{this.state.name} Your Roll Number is {this.state.roll} </h1>
//                 <button onClick={this.handleClick}>Click Me!!</button>
//             </div>
//         )
//     }
// }
// export default Student;

//********************Function Component***************/

function Student(props) {
    const handleClick = (e) => {
        //e.preventDefault();
        console.log("Button Clicked");
    }
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <button onClick={handleClick}>Click Me</button><br />
            <a href="http://www.geekyshows.com" onClick={handleClick}>Click Me</a>
        </div>
    );
}
export default Student;

