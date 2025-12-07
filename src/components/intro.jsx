import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    const welcome = 'Welcome to';
    const name = "Cherif Harrak Yasser";
    const slogan = 'Turning Creativity Into Code';


    return (
        
        <div className="flex flex-col items-center">
        
        <section className="font-poppins text-primary flex flex-col items-center mb-5 md:mb-10">
            <p className="text-[28px] md:text-[40px]">{welcome}</p>
            <p className="text-[35px] md:text-[45px]"><span className="font-bold text-accent">{`${name}`}</span>'s Portfolio</p>
            <p className="text-[33px] font-light italic text-accent md:text-[43px] ">{slogan}</p>
        </section>
        <section>
            <button>
                <a href="mailto:yassir.ch213@gmail.com" target="_blank" rel="noreferrer">
                    <div className="flex py-4 px-2 text-[15px] md:py-6 md:px-4 items-center text-accent md:text-[25px] border border-accent rounded-md hover:bg-primary hover:text-secondary transition ease-linear duration-400">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="ml-2">Let's Connect</p>
                    </div>
                </a>
                
            </button>
        </section>
        
        </div>
    )
}