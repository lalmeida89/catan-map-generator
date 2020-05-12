import styled, { css } from 'styled-components';

export const StyledHexTerrain = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
  display: inline-block;
  text-align: center;
  top: 0;
  border: 1px solid black;
  background-size: cover;
  background-position: center;

  ${props =>
    props.terrainType === 'Forest' &&
    css`
    background-image: url('https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg');
  `};

  ${props =>
    props.terrainType === 'Hills' &&
    css`
    background-image: url('https://www.popsci.com/resizer/6uqVIP0GR7cGFiAPgTsu2UENLIo=/760x518/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CLYZBOQDUNMFBUI33R3O3ETMHI.jpg');
  `};

  ${props =>
    props.terrainType === 'Mountain' &&
    css`
    background-image: url('https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg');
  `};

  ${props =>
    props.terrainType === 'Pasture' &&
    css`
    background-image: url('https://thumbs-prod.si-cdn.com/SkuS5xz-Q-kr_-ol6xblY9fsoeA=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d4/f6/d4f6e4bf-8f77-445d-a8f9-e3a74c6a40f0/ewkhdqqwsae0xpo.jpeg');
  `};

  ${props =>
    props.terrainType === 'Fields' &&
    css`
    background-image: url('https://lqrgre8853kennl42a4f3on3-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/SWWW-market-class_slider-1024x480.jpg');
  `};

  ${props =>
    props.terrainType === 'Desert' &&
    css`
    background-color: #dedea2;
    color: transparent;
  `};
  `
