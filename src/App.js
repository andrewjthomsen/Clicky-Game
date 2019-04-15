import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.js';
import Card from './components/card/index.js'
import Grid from './components/layout/index.js'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Grid images={imgArray}/>
      </div>
    );
  }
}
const imgArray = [1,2,3,4];
export default App;
