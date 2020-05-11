import React from 'react';

import './terrainHex.css';
import {StyledHexTerrain} from './styled-HexTerrain';

export const TerrainHex = (numberToken, terrainToken) => {
  return (
      <StyledHexTerrain terrainType={terrainToken}>
        <p className="numberToken numberToken-text">
            {numberToken.number}
        </p>
        <p className="numberToken numberToken-value-text">
            {numberToken.value}
        </p>
        <p className="terrainToken"> {terrainToken} </p>
      </StyledHexTerrain>
  )
}
