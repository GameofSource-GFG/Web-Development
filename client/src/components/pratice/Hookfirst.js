import React, { useState } from 'react'

function HookFirst(){
    const initialCount = 0
    const [ presentCount, setCount ] = useState(initialCount)
    return(
        <div>
            <button onClick = {() => setCount(presentCount + 1)}>Count: {presentCount}</button>
        </div>
    )
}

export default HookFirst