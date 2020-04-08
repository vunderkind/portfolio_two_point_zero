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
    background: black;
    color: white;
  }
`;

const lightTheme = {
  body: '#ffe57d',
  text: '#363537',
  toggleBorder: '#000',
  background: '#000',
  a: '#000'
}

const darkTheme = {
  body: '#000',
  text: '#ffbd69',
  toggleBorder: '#6B8096',
  background: '#241F1C',
  a: '#ff6363'
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
          <a href="https://justinirabor.com"><strong><p>{theme === 'light'? 'Justin Irabor':'Mogwai'}</p></strong></a>
          <div className="Resume">
          <span className="Arrow">
          <a href="#"><p>Resume</p></a>
          <Arrow className="Arrow"/>
          </span>
          <span className="Arrow">
          <a href="https://dev.to/vunderkind"><p>Blog</p></a>
          <Arrow />
          </span>
          <span className="Arrow">
          <a href="mailto:'justin.irabor@gmail.com'"><p>Contact</p></a>
          <Arrow />
          </span>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          </div>
      <div className="Home">
        <GlobalStyles />
        <div className="Bio">
          <div className="Move">
        <h1>{theme === 'light'? '🦔':'🦊'}</h1>
          </div>
        <h1>{theme === 'light'? 'Hello! I am Justin Irabor.': 'mogwai'}</h1>
        {theme === 'light' ? <h2>Full-stack dev. I work to mitigate the balkanization of digital disciplines.<br/> <a href="mailto:'thevunderkind@gmail.com">Let's talk 🤺.</a></h2>: <h2>A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈. Loves pizza 🍕, cats (in theory 🙀), story-driven rap music and knowing things no one will ever have a good use for 🤓. <br/><br/>Armed with a particular set of skills 🧰: JavaScript (Vanilla, React, Node), Parseltongue 🐍(Python, Django, Flask), Backend(SQL, MongoDB), Git and an infinite brain.</h2>}
        </div>
        </div>
        <Footer />
    </ThemeProvider>
  );
};

export default App;