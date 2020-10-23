import React, { useState } from "react"

function HookSecond(){
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    function IncreaseByFive(){
        for(let i = 0; i < 5; i++){
            setCount(prev => prev + 1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick= {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick = {() => setCount(prev => prev - 1)}>Decrease</button>
            <button onClick = {() => IncreaseByFive()}>Increase by 5</button>
        </div>
    )
}

export default HookSecond