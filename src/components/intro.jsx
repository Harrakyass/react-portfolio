import React from 'react';

export default function Intro() {
    const welcome = 'Welcome to';
    const name = "Cherif Harrak Yasser's Portfolio";
    const slogan = 'Turning Creativity Into Code';


    return (
        <section className="header">
            <h3>{welcome}</h3>
            <h1>{name}</h1>
            <h2>{slogan}</h2>
        </section>

    )
}