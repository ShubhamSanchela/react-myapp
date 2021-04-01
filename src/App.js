import React, { Component } from 'react'
import "./App.css"
import HookArray from './HookArray'
import PostForm from './PostForm'
import PostList from './PostList.jsx'
import HookCounter from './HookCounter'
import HookCounter2 from './HookCounter2'
import HookObject from './HookObject'
// import Post from './Post'
import Display from './Display'
import State from './components/State'

class App extends Component {
    render() {
        return(
            <div className="App">
                {/* <PostForm /> */}
                {/* <HookCounter /> */}
                {/* <HookCounter2 /> */}
                {/* <HookObject /> */}
                {/* <HookArray /> */}
                {/* <PostList /> */}
                {/* <Post /> */}
                {/* <Display /> */}
                <State roll={18} />
            </div>
        )
    }
}
export default App;


// import React , {Component} from "react";

// class App extends Component {
//     render() {
//         return <h1>Hello React Application</h1>;
//     }
// }
// export default App;


//**************Composite Component*********
// import { render } from "@testing-library/react";
// import React from "react";
// import Student from "./Student";

// const App = () => {
//   return (
//     <div>
//       <Student name="Shubham"/>
//       <Student name="Sonam"/>
//       <Student name="Sumit"/>
//     </div>
//   );
// };
// export default App;


