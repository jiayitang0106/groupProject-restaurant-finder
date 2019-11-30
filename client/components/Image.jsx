import React from 'react';
import styled from 'styled-components';

const BigImgContainer = styled.div`
  display: inline-block;
  overflow:hidden;
  background-color: black;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TopSmallContainer = styled(BigImgContainer)`
  border: 3px solid #fff;
  border-top: 0;
`

const BottomSmallContainer = styled(BigImgContainer)`
  border: 3px solid #fff;
  border-bottom: 0;
`

const BigImg = styled.img`
  width: 384px;
  height: 384px;
  display: block;
  object-fit: cover;
  transition: .2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    opacity: .9;
  }
`
const SmallImg = styled(BigImg)`
  width: 190px;
  height: 192px;
`

const Image = ({src, handleClick, idx, imageUrls}) =>  {
  // console.log(props.src);
  if (idx % 3 === 0) {
    return (
      <BigImgContainer>
        <BigImg src={src} onClick={() => handleClick(idx)}></BigImg>
      </BigImgContainer>
    );
  } else if (idx % 3 === 1) {
    return (
      <ColumnContainer>
        <TopSmallContainer>
          <SmallImg src={src} onClick={() => handleClick(idx)}></SmallImg>
        </TopSmallContainer>
        <BottomSmallContainer>
          <SmallImg src={imageUrls[idx+1]} onClick={() => handleClick(idx+1)}></SmallImg>
        </BottomSmallContainer>
      </ColumnContainer>
    );
  } else {
    return null;
  }
}

export default Image