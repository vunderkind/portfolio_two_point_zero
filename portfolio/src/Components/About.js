import React from 'react'
import justin from './justin.gif';
import bicycle from './bicycle.jpeg';
import facedead from './facedead.jpg'

function Home(props) {
    return (
        <div className="AHome">
        <div className="About">
        <h1>👋🏾</h1>
        <img src={justin} alt='Justin' className="Aboutimg"/>
        <h2>Le renard de Philip Tetlock</h2>
        <p><a href="https://www.blogs.hss.ed.ac.uk/crag/files/2016/06/the_hedgehog_and_the_fox-berlin.pdf">Isaiah Berlin's essay</a> is always a great place to start. If you prefer something more contemporary, Philip Tetlock's distillation of the concept of the Hedgehog and the Fox may be more your speed (<a href="https://books.google.com.ng/books?id=nPfWDgAAQBAJ&printsec=frontcover&dq=Phil+Tetlock+fox+hedgehog+Expert+Political+Judgment&hl=en&sa=X&redir_esc=y#v=onepage&q=Phil%20Tetlock%20fox%20hedgehog%20Expert%20Political%20Judgment&f=false">see here - it's a book!</a>). <br/><br/>The metaphor itself can be traced further back to old-timey poet Archilochus (nice name), who said: "the fox knows many things, and the hedgehog knows one big thing." To capture that imagery, Isaiah Berlin himself offers examples of Foxes (that is, people who formulate new ideas on a case-by-case basis for every situation they find themselves in): Aristotle and Shakespeare. On the hedgehog's corner of the brainscape, they're characterized as people who come upon one grand idea, and apply it to several contexts. Berlin helpfully supplies Plato and Dostoyevsky as model hedgehogs.<br/><br/>As soon as you have this mental model, you won't be able to un-have it.  </p>
        {/* <br/> */}
        <p>I consider this a heuristic more than anything else, and I have applied it to categorizing myself as a fox. I am a creator, a scientist, a knowledge worker, and I've spent the last five years of my career playing different roles: first as a simple content writer, to heading performance marketing, to becoming a Director of Growth, and now a full-stack web developer. In that time I have led product management for real-world products with good enough traction to earn me a little pride, led the growth efforts and market placement of other products, and now I've started to build some products of my own.</p>
        <a href="https://www.cio.com/article/3151060/decide-if-youre-a-hedgehog-or-a-fox.html"><p>Bonus: read this to the end to find out if you're a fox or hedgehog.</p></a>
        <img src="https://s3-img.pixpa.com/com/500/35465/1557503513-5032-startwomangif.gif" alt='draw'className="Aboutimg"/>
        <p>I am also an <a href="https://mogwai.pixpa.com">artist and an animator. <a href="http://obaranda.com">I make comics to blow off steam, too.</a></a></p>
        <br/>
        <h2>Preoccupations</h2>
        <p>When I am not bashing my head against a keyboard because something won't act the way I expect it to, I am listening to a crap-load of music, <a href="https://readup.com/@vunderkind">reading a crap-load of blog posts,</a> making sketches or animating or...riding a bicycle with a bunch of kids. </p>
        <img src={bicycle} alt='bike' className="Aboutimg"/>
        <p>I do some writing on my Substack blog titled <a href="https://dowhile.substack.com">'Do While Thinking'</a> (geddit...? hah!) where I try to break my mind from the monotone of constant execution without pausing to think. There's no gimmick to the title: it is me doing things while thinking about doing things - keeping the mind sharp while the fingers continue to wear down expensive Macbook keyboards. </p>
        <br/>
        <img src={facedead} alt='draw2'style={{width:'50%'}}/>
        <h2>The money quotes</h2>
        <p>This section is reserved for things I've said in the past that I imagine someone cooler said:</p>
        <p>"Passion is its own punishment" - Some guy</p>
        <p>"I imagine that whenever man makes another breakthrough that lets them see farther into space, God mumbles "great, now I have to render that part of the universe."</p>
        <p>"Everyone snores the same, regardless of nationality."</p>
        <p>"Breathe deep. You won't die. And if you die, you're dead."</p>
        <p>"The critic must know something the maker doesn't. Sometimes the critics knows distribution better. sometimes the critic is more connected with the hoi polloi. In some instances, the critic has more knowledge of the theme, the philosophy, the exploration the creator is attempting. Whatever the case, the critic should know something the maker doesn't."</p>
        <br/>
        <a href="mailto:thevunderkind@gmail.com"><h2>Fancy a chat? Send me an email -->📩</h2></a>
        <br/><br/><br/><br/><br/>

        </div>
        </div>
    )
}

export default Home