import React from 'react'

function Home(props) {
    return (
        <div className="Home">
        <div className="Bio">
          <div className="Move">
        <h1 className="Hedgehog">{props.theme === 'light'? '🦔':'🦊'}</h1>
          </div>
        <h1>About me.</h1>
        {props.theme === 'light' ? <h2>Full-stack developer. I work to mitigate the balkanization of digital disciplines.<br/> <br/><a href="mailto:'thevunderkind@gmail.com">Let's talk 🤺.</a></h2>: <h2>A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈.<br/><br/><a href="mailto:'thevunderkind@gmail.com">Hit me! 🏌️.</a></h2>}
        </div>
        </div>
    )
}

export default Home