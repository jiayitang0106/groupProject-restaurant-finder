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