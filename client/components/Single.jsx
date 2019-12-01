import React from 'react';
import styled from 'styled-components';
import { CloseCircle } from 'styled-icons/remix-line/CloseCircle';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight';
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft';

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(16,24,32,.95);
  box-sizing: border-box;
  padding: 0 40px 40px;
  text-align: center;
  /* margin-top: auto;
  margin-bottom: auto; */
  /* display: table; */
`

const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
`

const StyledImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px
  max-height: 900px;
  object-fit: cover;
  display: table;
`

const StyledButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: none;
  border: 0;
`

const StyledNavWrapper = styled.div`
  vertical-align: middle;
  display: flex;
  flex-flow: row wrap;
  top: 0px;
  height: 80px;
  width: 100%;
`

const StyledNav = styled.div`
  margin: auto;
  vertical-align: middle;
  color: white;
  font: 11px/13px 'Arial';
  letter-spacing: .2em;
  text-transform: uppercase;
  flex: 1;
`

const StyledCounter = styled.span`
  padding-right: 8px;
  letter-spacing: .05em;
`

const StyledClosed = styled(CloseCircle)`
  padding: 8px;
  color: #e1e1e1;
  &:hover {
    color: #101820;
    background-color: #e1e1e1;
    opacity: .85;
  }
`

const StyledMulti = styled(Grid)`
  padding: 8px;
  color: #e1e1e1;
  &:hover {
    color: #101820;
    background-color: #e1e1e1;
    opacity: .85;
  }
`

const StyledLeft = styled(KeyboardArrowLeft)`
  padding: 5px;
  color: #e1e1e1;
  left: 60px;
  top: calc(50% - 20px);
  position: absolute;
  z-index: 2;

  &:hover {
    /* color: #101820; */
    background-color: #101820;
    opacity: .8;
    border-radius: 50%;
  }
`

const StyledRight = styled(KeyboardArrowRight)`
  padding: 5px;
  color: #e1e1e1;
  right: 60px;
  top: calc(50% - 20px);
  position: absolute;
  z-index: 2;

  &:hover {
    /* color: #101820; */
    background-color: #101820;
    opacity: .8;
    border-radius: 50%;
  }
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
      <StyledNavWrapper>
        <StyledNav>
        </StyledNav>
        <StyledNav>
          Barndiva
        </StyledNav>
        <StyledNav>
          <StyledCounter>
            {idx+1} of {total}
          </StyledCounter>
          <StyledMulti size="20" onClick={() => handleView('multi')}>multi</StyledMulti>
          <StyledClosed size="22" onClick={() => handleView('main')}></StyledClosed>
        </StyledNav>
      </StyledNavWrapper>
      <StyledImgWrapper>
        <StyledImg src={url} />
        <StyledButtonWrapper>
          <StyledLeft size="30" onClick={() => handleClick(prev)}>prev</StyledLeft>
          <StyledRight size="30" onClick={() => handleClick(next)}>next</StyledRight>
        </StyledButtonWrapper>
      </StyledImgWrapper>
    </StyledContainer>
  );
}

export default Single
