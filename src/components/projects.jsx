import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import pomodoro from '../assets/screenshot.png';
import todoList from '../assets/todo-list.png';
import suptem from '../assets/suptem.png';
import quotes from '../assets/quotes.png';

export default function Projects() {
    const projectSummary = "I take pride in developing creative and functional web applications that showcase my skills in front-end and full-stack development. Each project highlights a unique aspect of my expertise, from dynamic designs to robust functionality.";

    const projects = [
        {
            id: 'pomodoro',
            src: pomodoro,
            title: "Pomodoro App",
            liveLink: "https://harrakyass.github.io/pomodoro-app/",
            repoLink: "https://github.com/Harrakyass/pomodoro-app",
            description: "A productivity powerhouse with custom timers and session tracking.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            featured: true // This will make the card larger
        },
        {
            id: 'suptem',
            src: suptem,
            title: "Suptem Bmhs",
            liveLink: "https://suptembmhs.com/",
            repoLink: null,
            description: "Full-scale university website with SEO and performance optimization.",
            tech: ["WordPress", "SEO", "UI/UX"],
            featured: false
        },
        {
            id: 'todoList',
            src: todoList,
            title: "Task Master",
            liveLink: "https://harrakyass.github.io/to-do-list/",
            repoLink: "https://github.com/Harrakyass/to-do-list",
            description: "Advanced task management with persistent local storage.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            featured: false
        },
        {
            id: 'quoteGenerator',
            src: quotes,
            title: "Inspo Quotes",
            liveLink: "https://harrakyass.github.io/quote_generator/",
            repoLink: "https://github.com/Harrakyass/quote_generator",
            description: "Minimalist generator fetching API data with elegant transitions.",
            tech: ["React", "TailwindCSS", "Vite"],
            featured: false
        },
        
    ];

    return (
        <div id="Projects" className=" bg-secondary/5 py-16 px-6 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 w-12 bg-accent rounded-full"></div>
                        <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">Portfolio</span>
                    </div>
                    <h2 className="text-primary text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
                    <p className="text-primary/70 text-sm md:text-base leading-relaxed italic border-l-2 border-accent/30 pl-4">
                        "{projectSummary}"
                    </p>
                </div>
            </div>

            {/* The Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-secondary shadow-2xl transition-all duration-500 hover:-translate-y-2
                            ${project.featured ? 'md:col-span-6 lg:col-span-8 h-[400px]' : 'md:col-span-3 lg:col-span-4 h-[400px]'}`}
                    >
                        {/* Project Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img 
                                src={project.src} 
                                alt={project.title} 
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                            <div className="flex flex-wrap gap-2 mb-4 transition-transform duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-[10px] rounded-full font-bold uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-primary text-2xl font-bold mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                                {project.title}
                            </h3>
                            
                            <p className="text-primary/70 text-sm mb-6 line-clamp-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-6">
                                {project.repoLink && (
                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-accent transition-colors text-xl">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent font-bold text-sm group/link">
                                    <span>View Project</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}