import React from 'react';

import './terrainHex.css';
import {StyledHexTerrain} from './styled-HexTerrain';

export const TerrainHex = (numberToken, terrainToken, showNumberFlag) => {
  return (
      <StyledHexTerrain terrainType={terrainToken} className='terrain-hexagon'>
          {showNumberFlag ?
            <div className={terrainToken !== 'Desert' ? 'numberToken-text' : 'desert-terrain'}>
              <p className="numberToken numberToken-upperText">
                {numberToken.number}
              </p>
              <p className="numberToken numberToken-value-text">
                {numberToken.value}
              </p>
            </div>
          : null }
      </StyledHexTerrain>
  )
}
