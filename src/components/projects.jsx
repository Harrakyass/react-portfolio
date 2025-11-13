import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import pomodoro from '../assets/screenshot.png';
import todoList from '../assets/todo-list.png';
import suptem from '../assets/suptem.png';
import quotes from '../assets/quotes.png';


export default function Projects() {
    const projectSummary = "I take pride in developing creative and functional web applications that showcase my skills in front-end and full-stack development. Each project highlights a unique aspect of my expertise, from dynamic, responsive designs to robust back-end functionality. Whether it’s creating a portfolio website, a productivity tool, or an engaging user experience, my work is driven by a commitment to innovation and usability. Below are a few of my projects that demonstrate my dedication to crafting effective and user-friendly solutions. ";
    const projects = {
        pomodoro: {
            src: pomodoro,
            alt: "Pomodoro App Screenshot",
            title: "Pomodoro App",
            liveLink: "https://harrakyass.github.io/pomodoro-app/",
            repoLink: "https://github.com/Harrakyass/pomodoro-app",
            description: "A productivity app designed to help users manage time effectively with the Pomodoro technique."
        },

        todoList: {
            src: todoList,
            alt: "Todo List App Screenshot",
            title: "Todo List",
            liveLink: "https://harrakyass.github.io/to-do-list/",
            repoLink: "https://github.com/Harrakyass/to-do-list",
            description: "A task management app allowing users to add, edit, and remove tasks with local storage functionality."
        },

        quoteGenerator: {
            src: quotes,
            alt: "Quote generator screenshot",
            title: "Quote Generator",
            liveLink: "https://harrakyass.github.io/quote_generator/",
            repoLink: "https://github.com/Harrakyass/quote_generator",
            description: "A minimalist and elegant quote generator built with React and Vite. "
        },

        suptem: {
            src: suptem,
            alt: "suptembmhs.com Screenshot",
            title: "Suptem Bmhs Website",
            liveLink: "https://suptembmhs.com/",
            description: "A dynamic school website built with WordPress, featuring SEO optimization and responsive design."
        }
    };

    return (
        <div className="section-border">
                <div className="section-title">
                    <h2>Projects</h2>
                </div>
                <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center lg:mb-8 lg:ml-8 text-primary text-[12px] p-10">
                        <p>{projectSummary}</p>
                    </div>
                    <div className="">
                        <p>the carousel will be here</p>
                    </div>
                    
                </div>
                
                
        </div>
    )
}