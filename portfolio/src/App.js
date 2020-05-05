import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Projects from './Components/Projects'
import Header from './Components/Header'
import Home from './Components/Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './Components/About'
// import Arrow from './Components/Arrow';
import Footer from './Components/Footer'

const GlobalStyles = createGlobalStyle`
  body, .Nav, #Footer {
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
      <GlobalStyles/>
      <Header theme={theme} toggleTheme={toggleTheme}/>
            <Router>
            <Route exact path="/projects"><Projects/></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/"><Home theme={theme}/></Route>
            </Router>
            
      <Footer theme={theme}/>
    </ThemeProvider>
  );
};

export default App;