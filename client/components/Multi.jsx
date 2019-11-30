import React from 'react';
import styled from 'styled-components';
import { CloseCircle } from 'styled-icons/remix-line/CloseCircle';

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
  color: #fff;
  /* display: table; */
`
const StyledGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
`

const StyledGrid = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  max-height: 850px;
  max-width: 100%;
  overflow-y: scroll;

  &::-webkit-slider-thumb {
    background-color: #e1e1e1;
    background: #e1e1e1;
    color: #e1e1e1;
    border-radius: 10px;
  }

`

const StyledImgContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  background-color: black;
`

const StyledImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    opacity: .9;
  }
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
  padding-right: 10px;
  visibility: hidden;
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

const Multi = ({imageUrls, handleClick, handleView}) =>  {
  return (
    <StyledContainer>
      <StyledNavWrapper>
        <StyledNav>
        </StyledNav>
        <StyledNav>
          Barndiva
        </StyledNav>
        <StyledNav>
          <StyledCounter>
            0 of 0
            <button onClick={() => handleView('multi')}>Multi</button> |
          </StyledCounter>
          <StyledClosed size="22" onClick={() => handleView('main')}>close</StyledClosed>
        </StyledNav>
      </StyledNavWrapper>
      <StyledGridWrapper>
        <StyledGrid>
          {imageUrls.map((url, idx) => <StyledImgContainer key={idx}><StyledImg src={url} key={idx} onClick={() => handleClick(idx)}></StyledImg></StyledImgContainer>)}
        </StyledGrid>
      </StyledGridWrapper>
    </StyledContainer>
  );
}

export default Multi

/*

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
  box-sizing: border-box;
  padding: 0 40px 40px;
  text-align: center;
  color: #fff;
  display: table;
`

const StyledTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`

const StyledImgContainer = styled.div`
  display: inline-block;
  overflow:hidden;
  background-color: black;
`

const StyledImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    opacity: .9;
  }
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

const StyledButtonWrapper = styled.span`
  display: table-cell;
  vertical-align: middle;
`

const Multi = ({imageUrls, handleClick, handleView}) =>  {
  return (
    <StyledContainer>
        <StyledNav>
          <StyledName>Barndiva</StyledName>
          <StyledButtonWrapper>
            <button onClick={() => handleView('main')}>close</button>
          </StyledButtonWrapper>
        </StyledNav>
      <StyledTable>
        {imageUrls.map((url, idx) => <StyledImgContainer><StyledImg src={url} key={idx} onClick={() => handleClick(idx)}></StyledImg></StyledImgContainer>)}
      </StyledTable>
    </StyledContainer>
  );
}

export default Multi
*/