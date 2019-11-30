import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
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

const StyledImgWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`

const StyledImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 600px
  max-height: 600px;
  object-fit: cover;
`

const StyledNav = styled.div`
  display: table-row;
  top: 0px;
  height: 20px;
  width: 1400px;
`

const Single = ({ idx, total, handleView, url, handleClick }) =>  {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 27:
        handleView('main');
        break;
      case 37:
        handleClick(idx-1);
        break;
      case 39:
        handleClick(idx+1);
        break;
    }
  };


  return (
    <StyledContainer >
      <StyledNav>
        <span>BELCAMPO MEAT CO</span>
        <span>{idx+1} of {total}</span>
        <button onClick={() => handleView('multi')}>Multi</button> |
        <button onClick={() => handleView('main')}>Close</button>
      </StyledNav>
      <StyledImgWrapper>
        <StyledImg src={url} />
        <div>
          <button onClick={() => handleClick(idx-1)}>Prev</button>
          <button onClick={() => handleClick(idx+1)}>Next</button>
        </div>
      </StyledImgWrapper>
    </StyledContainer>
  );
}

export default Single
