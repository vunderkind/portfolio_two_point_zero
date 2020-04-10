import React from 'react'

function Home(props) {
    return (
        <div className="Home">
        <div className="Bio">
          <div className="Move">
        <h1 className="Hedgehog">{props.theme === 'light'? '🦔':'🦊'}</h1>
          </div>
        <h1>{props.theme === 'light'? 'Hello! I am Justin Irabor.': 'mogwai'}</h1>
        {props.theme === 'light' ? <h2>Full-stack dev. I work to mitigate the balkanization of digital disciplines.<br/> <a href="mailto:'thevunderkind@gmail.com">Let's talk 🤺.</a></h2>: <h2>A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈. Loves pizza 🍕, cats (in theory 🙀), story-driven rap music and knowing things no one will ever have a good use for 🤓. <br/><br/>Armed with a particular set of skills 🧰: JavaScript (Vanilla, React, Node), Parseltongue 🐍(Python, Django, Flask), Backend(SQL, MongoDB), Git and an infinite brain.</h2>}
        </div>
        </div>
    )
}

export default Home