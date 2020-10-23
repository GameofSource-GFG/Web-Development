import React, { useState } from "react"

function HookThird()
{
    const [name, setName ] = useState({firstName: "", lastName: ""}) 
    return (
        <div>
            <h1>{JSON.stringify(name)}</h1>
            <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value}) } />
            <input type="text" value={name.lastName}  onChange={(e) => setName({...name, lastName: e.target.value})}/>
        </div>
    )
}

export default HookThird