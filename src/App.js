import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index.js';
import Banner from './components/banner/index.js';
import Grid from './components/layout/index.js';
import imageData from '../src/imageData.js';

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

class App extends Component {// app is a child of component
  //set default val for state
  constructor () {
    super ()// says call my parent constructor
    // this refers to current context of app
    this.state = {
      score: 0,
      topScore: 0,
      images: imageData,
      imagesAlreadyClicked: []
    };
  }
  //click function that is our image click holder
  imageClickHandler = (index) => {
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
    //1.check to see if image was already clicked
    var imageAlreadyClicked = false;
    var clickedImage = this.state.images[index];
    for (let i = 0; i < this.state.imagesAlreadyClicked.length; i++) {
      const image = this.state.imagesAlreadyClicked[i];
      if (clickedImage.url == image.url) {
        imageAlreadyClicked = true;
        break;
      }
    }
    if (imageAlreadyClicked) {
      this.setState({
        imagesAlreadyClicked: [],
        score: 0
      });
    } else {
      // 1. Increment score
      // 2. Add the image they clicked to the array of images already clicked
      // 3. If the current score is higher than top score, set top score to score
      var score = this.state.score + 1;
      var alreadyClickedCopy = this.state.imagesAlreadyClicked;
      alreadyClickedCopy.push(clickedImage);
      this.setState({
        score: score,
        topScore: score > this.state.topScore ? score : this.state.topScore,
        imagesAlreadyClicked: alreadyClickedCopy,
      });
    }
    //2. increment scores based on step 1
    //3. shuffle the images--react component state google
    this.setState({
      images: shuffle(this.state.images)
    });
  }
  render() {
    return (
      <div className = "container">
        <div className = "header">
          <Header score={this.state.score}/>
        </div>
        <Banner header="Click Game!" subheader="Click on an image to earn a point, but don't click anything twice!" />
        <div className="wrapper">
          <div className="content">
            <Grid images={this.state.images} onImageClick={this.imageClickHandler} />          
          </div>
        </div>
      </div> 
      );
  }
}
//create a score componeent to dynamically change the score
// state constructor function called first, creates app
// render generates html and js that makes page show up

export default App;
