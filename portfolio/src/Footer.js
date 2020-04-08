import React from 'react';
import './App'

const Arrow = () => {
    return (
    <img src="https://image.flaticon.com/icons/svg/2026/2026915.svg" alt="arrow" width="10" height="10"/>
    )
  }

const Footer = () => {
    return (
    <div id="Footer">
        <div className="LinkedIn">
        <a href="https://www.linkedin.com/in/justinirabor/"><span className="Arrow">
        <p>LinkedIn</p>
        <Arrow/>
        </span>
        </a>
        <a href="https://github.com/vunderkind">
        <span className="Arrow">
        <p>Github</p><Arrow/>
        </span>
        </a>
        </div>
        <div className="Right">
        <a href="#"><span className="Arrow"><p>Projects</p><Arrow/></span></a>
        </div>
    </div>
    )
}

export default Footer