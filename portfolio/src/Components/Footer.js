import React from 'react'
import '../App.css'

function Footer(props){
    return(
        <nav id="Footer">
            <a href="https://www.linkedin.com/in/justinirabor/"><p>LinkedIn</p></a>
            <a href="https://github.com/vunderkind"><p>Github</p></a>
            <a href="/projects"><p>Projects</p></a>
            <span className="Ninja">
            <a href="#"><p>Resume</p></a>
            <a href="https://dev.to/vunderkind"><p>Blog</p></a>
            <a href="/about"><p>About</p></a>
            </span>
            
          </nav>
    )
}

export default Footer