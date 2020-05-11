import React, { Component } from 'react'

import TerrainHexContainer from './TerrainHexContainer.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberTokensArray : [
                            {number: 2, value: '•'},
                            {number: 3, value: '••'},
                            {number: 3, value: '••'},
                            {number: 4, value: '•••'},
                            {number: 4, value: '•••'},
                            {number: 5, value: '••••'},
                            {number: 5, value: '••••'},
                            {number: 6, value: '•••••'},
                            {number: 6, value: '•••••'},
                            {number: 8, value: '•••••'},
                            {number: 8, value: '•••••'},
                            {number: 9, value: '••••'},
                            {number: 9, value: '••••'},
                            {number: 10, value:'•••'},
                            {number: 10, value:'•••'},
                            {number: 11, value:'••'},
                            {number: 11, value:'••'},
                            {number: 12, value:'•'},
                            {number: 0 , value: 0}
                        ],
      terrainHexArray : [
                    'Forest','Forest','Forest','Forest',
                    'Mountain','Mountain','Mountain',
                    'Hills', 'Hills', 'Hills',
                    'Pasture','Pasture','Pasture','Pasture',
                    'Fields','Fields','Fields','Fields',
                    'Desert'
                    ]
    }
  }


  //numberTokensArray refer to the individual number tokens and the terrain hex does similarly
  //we shuffled both arrays and set the state to represent the new arrays. Because we want the desert terrain hex
  //and the zero to always end up being the same index, we then find the index of both and swap elements in both
  //arrays to match that.


  render() {
    const {numberTokensArray, terrainHexArray} = this.state;

    const formatNumbersForDisplay = arr => {
      for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr
    }

    const swapArrayElements = (arr, indexA, indexB) => {
      var temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    };

    const generateMap = (arr1, arr2) => {
      formatNumbersForDisplay(arr1)
      formatNumbersForDisplay(arr2)
      let positionOfDesert = arr2.indexOf('Desert')
      let positionOfZero = arr1.map(function(e) { return e.number; }).indexOf(0)
      swapArrayElements(arr1, positionOfZero, positionOfDesert)
      this.setState({
        numberTokensArray: arr1,
        terrainHexArray: arr2
      })
    }
    
    return (
      <div className="App">
          <TerrainHexContainer numberArray={numberTokensArray} hexArray={terrainHexArray}/>
          <button
              onClick={()=>generateMap(numberTokensArray, terrainHexArray)}> click to randomize
          </button>
      </div>
    );
  }
}
export default App
