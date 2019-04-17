// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const Card = (props) => {
    return (<img src={props.image.url} height="100px" width="100px"></img>)

}

export default Card;