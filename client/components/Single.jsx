import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.8);
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  color: #fff;
  display: table;
`

const Middle = styled.div`
  display: table-cell;
  vertical-align: middle;
`

const ImgStyled = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 600px
  max-height: 600px;
  object-fit: cover;
`

const Single = ({ idx, total, handleView, url, handleClick }) =>  {
  return (
    <Container >
      <Middle>
      <div>
        <span>BELCAMPO MEAT CO</span>
        <span>{idx+1} of {total}</span>
        <button onClick={() => handleView('multi')}>Multi</button> |
        <button onClick={() => handleView('main')}>Close</button>
      </div>
      <ImgStyled src={url} />
      <div>
        <button onClick={() => handleClick(idx-11)}>Prev</button>
        <button onClick={() => handleClick(idx+1)}>Next</button>
      </div>
      </Middle>
    </Container>
  );
}

export default Single
