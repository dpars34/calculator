import React from "react"
import "./screen.css"

function Screen(props) {
    return(
        <div>
            <h1 className="screen">{props.number.length === 0 ? props.firstNumber : props.number}</h1>
        </div>
    )
}

export default Screen 