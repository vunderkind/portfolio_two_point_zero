import React from 'react'
import '../App.css'

function Footer(props){
    return(
        <nav id="Footer">
            <a href="https://www.linkedin.com/in/justinirabor/"><p>LinkedIn</p></a>
            <a href="https://github.com/vunderkind"><p>GitHub</p></a>
            <a href="/projects"><p>Projects</p></a>
            <a href="/about"><p>About</p></a>
            <span className="Ninja">
            <a href="https://drive.google.com/file/d/1YXFleB6funHDbD9mTcDCpzhYGNHXkV6F/view"><p>Resume</p></a>
            <a href="https://dev.to/vunderkind"><p>Blog</p></a>
            </span>
            
          </nav>
    )
}

export default Footer