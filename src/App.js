import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index.js';
import Grid from './components/layout/index.js';
import imageData from '../src/imageData.js';
class App extends Component {// app is a child of component
  //set default val for state
  constructor () {
    super ()// says call my parent constructor
    // this refers to current context of app
    this.state = {score:1};
  }
  //click function that is our image click holder
  imageClickHandler = ()=> {
  // TODO: only game event that needs to be defined
  // google search for react onclick event
  // bind this context to imageClickHandler
  // pass down into grid and into image so each image knows what to do when clicked
  // when an image is clicked has image alraedy been clicked, if yes, reset score to zero
  // if hasn't increment score by 1 and shuffle pictures
  // TIPS: need to put anothe rproperty on image data -->ID<---- to differentiate between images
  // tells whetehr clicked or not
  // need to store on state the ids of already clicked images so there's something to reference if already clicked
  // Need to google how to update state
  }
  render() {
    return (
      <div>
        <Header score={this.state.score}/>
        <div className="wrapper">
          <Grid images={imageData}/>
        </div>
      </div>
    );
  }
}
//create a score componeent to dynamically change the score
// state constructor function called first, creates app
// render generates html and js that makes page show up

export default App;
