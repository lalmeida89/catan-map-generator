import React from 'react';

import {TerrainHex} from './TerrainHex.js';

const TerrainHexContainer = props => {
    return (
      <div id='terrainHex-container'>
          {TerrainHex(props.numberArray[0], props.hexArray[0])}
          {TerrainHex(props.numberArray[1], props.hexArray[1])}
          {TerrainHex(props.numberArray[2], props.hexArray[2])} <br/>
          {TerrainHex(props.numberArray[3], props.hexArray[3])}
          {TerrainHex(props.numberArray[4], props.hexArray[4])}
          {TerrainHex(props.numberArray[5], props.hexArray[5])}
          {TerrainHex(props.numberArray[6], props.hexArray[6])}  <br/>
          {TerrainHex(props.numberArray[7], props.hexArray[7])}
          {TerrainHex(props.numberArray[8], props.hexArray[8])}
          {TerrainHex(props.numberArray[9], props.hexArray[9])}
          {TerrainHex(props.numberArray[10], props.hexArray[10])}
          {TerrainHex(props.numberArray[11], props.hexArray[11])} <br/>
          {TerrainHex(props.numberArray[12], props.hexArray[12])}
          {TerrainHex(props.numberArray[13], props.hexArray[13])}
          {TerrainHex(props.numberArray[14], props.hexArray[14])}
          {TerrainHex(props.numberArray[15], props.hexArray[15])} <br/>
          {TerrainHex(props.numberArray[16], props.hexArray[16])}
          {TerrainHex(props.numberArray[17], props.hexArray[17])}
          {TerrainHex(props.numberArray[18], props.hexArray[18])}

      </div>
    );
}
export default TerrainHexContainer
