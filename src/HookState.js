import React, { useState } from 'react'

function App() {

    const [name, setName] = useState("Shubham");
    const [roll, setRoll] = useState(101);

    // const name = nameStateVariable[0]
    // const setName = nameStateVariable[1]

    const handleClick = () => {
        setName("Sanchela");
        setRoll(105);
    }
    
    return (
        <React.Fragment>
        <h1>Hello : {name} </h1>
        <h1>Roll Number : {roll} </h1>
        <button type="button" onClick={handleClick} >Change Value</button>
        </React.Fragment>
    );
}
export default App
