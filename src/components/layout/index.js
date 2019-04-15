// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react"
import Card from "../card";
// stateless functional component that returns html (jsx)
const Grid = (props) => {
    return (<div class="container">
    <div class="row">
      <div class="col-sm">
        <Card/>
      </div>
      <div class="col-sm">
      <Card/>
      </div>
      <div class="col-sm">
      <Card/>
      </div>
      <div class="col-sm">
      <Card/>
      </div>
    </div>
  </div>);

}
//TODO props.images array: iterate over what's inside array.map(), 
// Render new div, new column, new card. Grab source and create card from it

export default Grid;