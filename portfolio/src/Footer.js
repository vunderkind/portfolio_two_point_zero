import React from 'react';
import './App'

const Arrow = () => {
    return (
    <img src="https://image.flaticon.com/icons/svg/2026/2026915.svg" alt="arrow" width="10"/>
    )
  }

const Footer = () => {
    return (
    <div className="Nav" id="Footer">
        <div className="LinkedIn">
        <span className="Arrow">
        <p>LinkedIn</p>
        <Arrow/>
        </span>
        <span className="Arrow">
        <p>Github</p><Arrow/>
        </span>
        </div>
        <span className="Arrow"><p>Projects</p><Arrow/></span>

    </div>
    )
}

export default Footer