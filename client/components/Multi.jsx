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
const Multi = ({imageUrls, handleClick, handleView}) =>  {
  return (
    <Container>
       {imageUrls.map((url, idx) => <ImgStyled src={url} key={idx} onClick={() => handleClick(idx)}></ImgStyled>)}
      <div>
        <button onClick={() => handleView('main')}>close</button>
      </div>
    </Container>
  );
}

export default Multi