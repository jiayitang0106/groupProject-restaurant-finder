import React from 'react';
import styled from 'styled-components';


const Single = ({ idx, total, handleView, url, handleClick }) =>  {
  return (
    <div>
      <div>
        <span>BELCAMPO MEAT CO</span>
        <span>{idx+1} of {total}</span>
        <button onClick={() => handleView('multi')}>Multi</button> |
        <button onClick={() => handleView('main')}>Close</button>
      </div>
      <img src={url}></img>
      <div>
        <button onClick={() => handleClick(idx-11)}>Prev</button>
        <button onClick={() => handleClick(idx+1)}>Next</button>
      </div>
    </div>
  );
}

export default Single
