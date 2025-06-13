import React from 'react';
import pomodoro from '../assets/screenshot.png';
import todoList from '../assets/todo-list.png';
import suptem from '../assets/suptem.png';


export default function Projects() {
    const projectSummary = "I take pride in developing creative and functional web applications that showcase my skills in front-end and full-stack development. Each project highlights a unique aspect of my expertise, from dynamic, responsive designs to robust back-end functionality. Whether it’s creating a portfolio website, a productivity tool, or an engaging user experience, my work is driven by a commitment to innovation and usability. Below are a few of my projects that demonstrate my dedication to crafting effective and user-friendly solutions. ";
    const projects = {
        pomodoro: {
            src: pomodoro,
            alt: "Pomodoro App Screenshot",
            title: "Pomodoro App",
            href: "https://harrakyass.github.io/pomodoro-app/",
            description: "A productivity app designed to help users manage time effectively with the Pomodoro technique."
        },

        todoList: {
            src: todoList,
            alt: "Todo List App Screenshot",
            title: "Todo List",
            href: "https://harrakyass.github.io/to-do-list/",
            description: "A task management app allowing users to add, edit, and remove tasks with local storage functionality."
        },

        suptem: {
            src: suptem,
            alt: "suptembmhs.com Screenshot",
            title: "Suptem Bmhs Website",
            href: "https://suptembmhs.com/",
            description: "A dynamic school website built with WordPress, featuring SEO optimization and responsive design."
        }
    };

    return (
        <>
            <article>
                <div>
                    <h2>Projects</h2>
                    <p>{projectSummary}</p>
                </div>
                <div>
                    {
                        Object.entries(projects).map(
                            ([key, value]) => {
                                return (
                                    <div key={key}>
                                        <img src={value.src}/>
                                        <div>
                                            <a href={value.href} target="_blank"><h3>{value.title}</h3></a>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                )  
                            }
                        )
                    }
                </div>
                
            </article>
        </>
    )
}