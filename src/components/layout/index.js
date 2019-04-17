// stateless
//define function that returns jsx and returns parameters (props)
import * as React from "react";
import Card from "../card";
// stateless functional component that returns html (jsx)
// grid takes in array of images of four across and works dynamically for the # of rows needed
const Grid = props => {
  // JS that's completely natural but is now returning jsx
  // Taking in an array thats on props.images,
  //TODO props.images array: iterate over what's inside array.map(),
  // Render new div, new column, new card. Grab source and create card from it
  
  return props.images.map((image, index) => {
    return (<Card image={image} key={index} />)
  });
};

export default Grid;
