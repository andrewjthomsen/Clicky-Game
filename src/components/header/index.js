// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
// stateless functional component that returns html (jsx)
const Header = (props) => {
    return (<div><h1>This is working!</h1>
        <h2>Score:{props.score}</h2></div>);
}

export default Header;