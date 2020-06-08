import React from 'react';

const projects = [
    {
    title: "Angels Among Us",
    description: "A simple tool for people with relatively secure financial statuses to help a randomly-generated list of people who have been economically affected by the COVID-19 outbreak.",
    tools: "React, SQL, MongoDB.",
    link: "https://angelsamong.us",
    },

    {
        title: "Pure Retail",
        description: "Reimagined, then designed and built (with a team) a shopping cart experience designed for people with minimal tech-savviness. Incorporated new ideas such as USSD payments, haggling, mobile-first inventory management.",
        tools: "Figma, React, MongoDB.",
        link: "https://pure-retail.com",
        },
        {
            title: "TENNIS!",
            description: "A gratifying exploration of the Canvas API. The result? A game of tennis. It's you versus Walter, the suspiciously limber AI opponent. Engarde! (or is that another sport?)",
            tools: "Vanilla JavaScript, Canvas API",
            link: "https://snek.vunderkind.now.sh/games/tennis.html",
            },
            {
                title: "ASTROFY for Spotify",
                description: "An app that generates a Spotify playlist for you based on your Horoscope.",
                tools: "React, Heroku, Vercel, Horoscope.js, Spotify Web API",
                link: "https://astro.now.sh",
                }, 
        {
            title: "Race Against Corona",
            description: "A MUD (multi-user dungeon) game with the simple objective of finding a cure for the coronavirus. You start out as the lone healthy person in a city overtaken by COVID-19. You must avoid contamination while seeking out a lab where a cure for the virus is located.",
            tools: "Python (Django), React.",
            link: "https://gamer.vunderkind.now.sh/",
            },
            {
                title: "Apple AirPods Cool Scroll Demo",
                description: "Cool JavaScript scroll effect inspired by Apple's AirPods Pro website.",
                tools: "Vanilla JavaScript and ScrollMagic.",
                link: "https://vunderkind.github.io/scrollmagic-demo/",
                },
                {
                    title: "The Motherkind",
                    description: "A little experiment with the Twitter API and the Markov chain algorithm.",
                    tools: "Python",
                    link: "https://twitter.com/themotherkind"

                },
                {
                    title: "Lambda DevDesque Queue",
                    description: "A nifty solution to the problem of too many open student tickets, and too few instructors/administrators to handle them.",
                    tools: "React, Redux.",
                    link: "https://frontend.martintmensah.now.sh/",
                    },
                    {
                        title: "Piano Reeves",
                        description: "Fun project for learning JavaScript event handlers. Based on a Wes Bos tutorial.",
                        tools: "Vanilla JavaScript",
                        link: "https://vunderkind.github.io/PianoReeves2/"
                    },

]

function Projects(){
    return (
        <div className="Home2">
            <div className="Projects">
            {projects.map((projects)=> (
                <div className="Projects2">
                <a href={projects.link}><h1>{projects.title}</h1></a>
                <p>{projects.description}</p>
                <p><strong>Built with: </strong>{projects.tools}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects