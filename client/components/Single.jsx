import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(16,24,32,.95);
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
  width: 800px
  max-height: 800px;
  object-fit: cover;
`

const StyledNav = styled.div`
vertical-align: middle;
display: table-row;
top: 0px;
height: 80px;
width: 1400px;
`

const StyledName = styled.span`
  display: table-cell;
  vertical-align: middle;
  color: white;
  font: 11px/13px 'Arial';
  letter-spacing: .2em;
  text-transform: uppercase;
  align: center;
`

const Single = ({ idx, total, handleView, url, handleClick }) =>  {
  let prev = idx === 0 ? total - 1 : idx - 1;
  let next = idx + 1 === total ? 0 : idx + 1;

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 27:
        handleView('main');
        break;
      case 37:
        handleClick(prev);
        break;
      case 39:
        handleClick(next);
        break;
    }
  };

  return (
    <StyledContainer >
      <StyledNav>
        <StyledName>Barndiva
        <span>{idx+1} of {total}</span>
        <button onClick={() => handleView('multi')}>Multi</button> |
        <button onClick={() => handleView('main')}>Close</button>
        </StyledName>
      </StyledNav>
      <StyledImgWrapper>
        <StyledImg src={url} />
        <div>
          <button onClick={() => handleClick(prev)}>Prev</button>
          <button onClick={() => handleClick(next)}>Next</button>
        </div>
      </StyledImgWrapper>
    </StyledContainer>
  );
}

export default Single
