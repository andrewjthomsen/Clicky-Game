// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const Banner = (props) => {
    return (
        <div className="banner">
            <h1>{props.header}</h1>
            <h2>{props.subheader}</h2>
        </div>
    );
}

export default Banner;