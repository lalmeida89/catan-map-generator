import styled, { css } from 'styled-components';

export const StyledHexTerrain = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
  display: inline-block;
  text-align: center;
  top: 0;
  border: 1px solid black;

  ${props =>
    props.terrainType === 'Forest' &&
    css`
    background-color: #076507;
  `};

  ${props =>
    props.terrainType === 'Hills' &&
    css`
    background-color: #ad3535;
  `};

  ${props =>
    props.terrainType === 'Mountain' &&
    css`
    background-color: #7c7cc5;
  `};

  ${props =>
    props.terrainType === 'Pasture' &&
    css`
    background-color: #7fd27f;
  `};

  ${props =>
    props.terrainType === 'Fields' &&
    css`
    background-color: #b6c348;
  `};

  ${props =>
    props.terrainType === 'Desert' &&
    css`
    background-color: #dedea2;
    color: transparent;
  `};
  `
