import React from 'react';
import profileImg from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const aboutMeP = "I'm a web developer passionate about crafting visually engaging and intuitive digital experiences. Recently graduated with a focus on software and decision systems, I specialize in front-end development and enjoy blending logic with creativity. My inspiration often comes from anime, manga, and storytelling, which drive me to build projects that feel alive and meaningful.";
    const skills = ["ReactJS", "Tailwind", "JavaScript", "NodeJS", "PHP", "SQL", "JAVA/JEE"]
    
    return (
        <div id="About Me" className=" bg-secondary/30 backdrop-blur-sm py-16 px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Image Section with "Project Card" style depth */}
                <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative overflow-hidden rounded-[40px] border-2 border-white/10 shadow-2xl">
                        <img 
                            className="w-64 h-64 md:w-80 md:h-80 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
                            src={profileImg} 
                            alt="Profile"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-accent text-3xl md:text-4xl font-bold">About Me</h2>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
                    </div>
                    
                    <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-8">
                        {aboutMeP}
                    </p>
                    
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Current Tech Stack:</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, key) => (
                            <div key={key} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-primary/70 text-sm hover:border-accent hover:text-accent transition-all duration-300">
                                <FontAwesomeIcon className="mr-2 text-xs opacity-50" icon={faCaretRight} />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}