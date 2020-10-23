import React from "react"
import { Checkbox } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

function CheckBox(){

    return(
        <div>
            <h1>CheckBox</h1>
            <Checkbox color="secondary" value="first" icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox>
        </div>
    )
}

export default CheckBox