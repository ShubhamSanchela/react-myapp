import React, { useState , useEffect } from 'react'

function App() {

    const [count,  setCount] = useState(0);
    const [count1,  setCount1] = useState(50);

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount1(count1 - 1);
    }

    useEffect(() => {
        console.log("Use effect Called");
    }, [count])

    return(
        <React.Fragment>

        <h1>Count Up : {count}</h1> 
        <button type="button" onClick={handleClick} >Increment</button>  

        <h1>Count Down : {count1}</h1> 
        <button type="button" onClick={handleDecrement} >Decrement</button>

        </React.Fragment>
    )
}
export default App
