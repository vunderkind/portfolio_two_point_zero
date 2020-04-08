import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from './Footer'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  h1 {
    color: ${({ theme }) => theme.h1};
  }

  a {
    color: ${({ theme }) => theme.a};
    text-decoration: none;
  }

  a:hover {
    background: red;
    color: white;
  }
`;

const lightTheme = {
  body: '#fff',
  text: '#363537',
  toggleBorder: '#000',
  background: '#000',
  a: '#fa5282'
}

const darkTheme = {
  body: '#363537',
  text: '#dbdbd9',
  toggleBorder: '#6B8096',
  background: 'black',
  a: '#52cafa'
}

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/801/801436.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2622/2622178.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
    </ToggleContainer>
  );
};

const Arrow = () => {
  return (
  <img src="https://image.flaticon.com/icons/svg/2026/2026915.svg" alt="arrow" width="10"/>
  )
}

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

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light');
    }
  };
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  })

  return [theme, toggleTheme]
};

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="Nav">
          <p>{theme === 'light'? 'Justin Irabor':'Mogwai'}</p>
          <div className="Resume">
          <span className="Arrow">
          <p>Resume</p>
          <Arrow className="Arrow"/>
          </span>
          <span className="Arrow">
          <p>Blog</p>
          <Arrow />
          </span>
          <span className="Arrow">
          <p>Contact</p>
          <Arrow />
          </span>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          </div>
      <div className="Home">
        <GlobalStyles />
        
        <div className="Toggl">
        {/* <h1>{theme === 'light' ? 'Justin Irabor' : 'Mogwai'}</h1> */}
        
        </div>
        <div className="Bio">
        <h1>{theme === 'light'? '🦔':'🦊'}</h1>
        <h2><strong>Justin Irabor</strong><br/>Full-stack dev. I work to mitigate the balkanization of digital disciplines.<br/> <a href="mailto:'thevunderkind@gmail.com">Let's talk 🤺.</a></h2>
        </div>
        </div>
        <div className="Nav" id="Footer">
          <p>{theme === 'light'? 'Justin Irabor':'Mogwai'}</p>
          <div className="Resume">
          <span className="Arrow">
          <p>Resume</p>
          <Arrow className="Arrow"/>
          </span>
          <span className="Arrow">
          <p>Blog</p>
          <Arrow />
          </span>
          <span className="Arrow">
          <p>Contact</p>
          <Arrow />
          </span>
          </div>
          </div>
    </ThemeProvider>
  );
};

export default App;