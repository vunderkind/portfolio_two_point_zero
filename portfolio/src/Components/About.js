import React from 'react'
import justin from './justin.gif';

function Home(props) {
    return (
        <div className="AHome">
        <div className="About">
        <h1>Who's Justin? And what, by God, is a mogwai?</h1>
        <img src={justin} alt='Justin' className="Aboutimg"/>
        </div>
        </div>
    )
}

export default Home