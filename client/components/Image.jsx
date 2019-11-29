import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Image = ({src, handleClick, idx}) =>  {
  // console.log(props.src);
  return (
    <ImgStyled src={src} onClick={() => handleClick(idx)}></ImgStyled>
  );
}

export default Image