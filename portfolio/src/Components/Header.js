import React from 'react'
import Arrow from './Arrow'
import Toggle from './Toggle'

function Header(props) {
    return(
        <div className="Nav">
          <a href="https://justinirabor.com"><strong><p>{props.theme === 'light'? 'Justin Irabor':'Mogwai'}</p></strong></a>
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
          <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
          </div>
          </div>
    )
}

export default Header