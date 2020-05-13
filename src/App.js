import React, { Component } from 'react'

import TerrainHexContainer from './TerrainHexContainer.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNumberFlag : true,
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
      ],
      arrayOfSizes : [3,4,5,4,3]
    }
  }


  //numberTokensArray refer to the individual number tokens and the terrain hex does similarly
  //we shuffled both arrays and set the state to represent the new arrays. Because we want the desert terrain hex
  //and the zero to always end up being the same index, we then find the index of both and swap elements in both
  //arrays to match that.


  render() {
    const {numberTokensArray, terrainHexArray, showNumberFlag} = this.state;

    //order to compare before displaying
    //shuffle -- formatNumbersForDisplay();
    //unpack -- unflattenArray();
    //compare -- algorithm to compare the position of 6's and 8's
    //swap -- perhaps swapArrayElements();
    //flatten -- arr.flat();
    //display -- generateMap();

    const unflattenArray = (arr, sizeArray) => {
      let tempArray = [...arr]
      let newArray = [];
      for(let i=0; i<sizeArray.length; i++){
        newArray.push(tempArray.splice(0, sizeArray[i]));
      }
      comparePosOfHighValues(newArray)
      console.log(newArray)
    }

    //unflattenArray(numberTokensArray, this.state.arrayOfSizes)


    //helper function to just check keys of numberTokensArray

    const showOnlyKeys = arr => {
      let tempArray = arr.map(a=>{return a.number})
      unflattenArray(tempArray, this.state.arrayOfSizes)

    }

    const findIndexOfHighValues = (arr, val1, val2) => {
      let indexOfHighValue1 = arr.indexOf(val1);
      let indexOfHighValue2 = arr.indexOf(val2);
      if (indexOfHighValue1 >= 0 || indexOfHighValue2 >= 0){
        return indexOfHighValue1 || indexOfHighValue2
      }
      /*if (indexOfHighValue2 >= 0){
        return indexOfHighValue2
      }*/
      else {
        return false
      }
    }

    const comparePosOfHighValues = arr => {
      //find an 8 or a 6.
      //check for other 8s and 6s within a one index radius
      for (let row = 0; row < arr.length; row++) {
        let currentRow = arr[row]
        let indexOf6 = findIndexOfHighValues(arr[row], 6)
        let indexOf8 = findIndexOfHighValues(arr[row], 8)
        if(indexOf6 >= 0 || indexOf8 >= 0){
          if(row === 0){
            console.log(currentRow, indexOf6, indexOf8);
            console.log(findIndexOfHighValues(arr[row+1], 6, 8));
          }

        }
        //for (let column = 0; column < row.length-; column++) {
        //}
      }
    }

    showOnlyKeys(numberTokensArray)

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

    const toggleNumberTokens = () => {
      this.setState(prevState =>({
        showNumberFlag : !prevState.showNumberFlag
      }))
    }

    return (
      <div className="App">
      <TerrainHexContainer
      numberArray={numberTokensArray}
      hexArray={terrainHexArray}
      showNumberFlag={showNumberFlag}/>
      <button
      onClick={()=>generateMap(numberTokensArray, terrainHexArray)}> click to randomize
      </button>
      <button
      onClick={()=>toggleNumberTokens()}> click to hide numbers
      </button>
      </div>
    );
  }
}
export default App
