import React from 'react';
import styled from 'styled-components'

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
  
    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img src="https://image.flaticon.com/icons/svg/801/801436.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
        <img src="https://image.flaticon.com/icons/svg/2622/2622178.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
      </ToggleContainer>
    );
  };
  
  
  
  const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.background};
    width: 6rem;
    height: 2.5rem;
    margin: 0;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    font-size: 0.5rem;
    padding: 0rem;
    overflow: hidden;
    cursor: pointer;
    outline: none;
  
    img {
      max-width: 2.2rem;
      height: auto;
      transition: all 0.3s linear;
  
      &:first-child {
        transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      }
  
      &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      }
    }
  `;

  export default Toggle