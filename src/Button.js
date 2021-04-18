import React from "react"

function Button(props) {
    return(
        <button value={props.value} onClick={props.onClick} className="button">{props.display}</button>
    )
}

export default Button