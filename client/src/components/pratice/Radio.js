import React, {useState} from 'react'
import { Radio } from '@material-ui/core'


function RadioButton() {
    const [gender , setGender ] = useState("female")
    function handleChange(e){
        setGender(e.target.value)
    }
    return (
        <div>
            <h1>Radio button using material ui</h1>
            <span>Male</span><Radio value="male" checked={gender === "male"} onChange={handleChange}/>            
            <span>Female</span><Radio value="female" checked={gender === "female"} onChange={handleChange}/>            
        </div>
    )
}

export default RadioButton
