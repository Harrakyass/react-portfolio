import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    const welcome = 'Welcome to';
    const name = "Cherif Harrak Yasser";
    const slogan = 'Turning Creativity Into Code';

   return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] px-6">
        <section className="font-poppins text-primary flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-accent/50"></div>
                <p className="text-sm md:text-lg opacity-60 font-light tracking-[0.4em] uppercase">{welcome}</p>
                <div className="h-[1px] w-8 bg-accent/50"></div>
            </div>
            
            <h1 className="text-4xl md:text-7xl leading-tight mb-4">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                    {name}
                </span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light italic text-accent/80 tracking-tight max-w-2xl">
                "{slogan}"
            </p>
        </section>
        
        <a href="mailto:yassir.ch213@gmail.com" target="_blank" rel="noreferrer" className="group">
            <div className="flex py-4 px-10 items-center justify-center text-secondary bg-accent rounded-full font-bold text-lg transition-all duration-300 group-hover:bg-primary group-hover:scale-105 shadow-[0_0_20px_rgba(130,195,218,0.3)] group-hover:shadow-accent/50">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 group-hover:animate-bounce" />
                <span>Let's Connect</span>
            </div>
        </a>
    </div>
)
}