import React from 'react'
import Arrow from './Arrow'
import Toggle from './Toggle'
// import {BrowserRouter as Router, Link,} from 'react-router-dom'

function Header(props) {
    return(
        <div className="Nav">
          <a href="/"><strong><p>{props.theme === 'light'? '<justin/>':'<mogwai/>'}</p></strong></a>
          <div className="Resume">
          <span className="Arrow">
          <a href="https://drive.google.com/file/d/1YXFleB6funHDbD9mTcDCpzhYGNHXkV6F/view"><p>Resume</p></a>
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
          <Toggle className='Toggle' theme={props.theme} toggleTheme={props.toggleTheme}/>
          </div>
          </div>
    )
}

export default Header