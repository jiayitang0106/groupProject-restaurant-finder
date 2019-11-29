import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const ImgStyled = styled.img`
  width: 200px;
  height: 200px;
`
const Multi = ({imageUrls, handleClick}) =>  {
  return (
    <Container>
      {imageUrls.map((url, idx) => <ImgStyled src={url} key={idx} onClick={() => handleClick(idx)}></ImgStyled>)}
    </Container>
  );
}

export default Multi