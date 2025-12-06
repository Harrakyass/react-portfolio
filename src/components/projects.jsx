import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                    <div className="w-full max-w-lg h-full max-w-lg ">
                        <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="h-64 rounded-[50px]"
                        >   
                            <SwiperSlide className="relative h-64 overflow-hidden rounded-[50px]">
                                <img src={projects.pomodoro.src} alt={projects.pomodoro.alt} className="absolute inset-0 w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl px-4 py-3 w-[85%] max-w-xs text-center shadow-lg">
                                    <h3 className="text-[12px] text-accent font-bold">{projects.pomodoro.title}</h3>
                                    <p className="text-[10px] ">{projects.pomodoro.description}</p>
                                    <div className="flex justify-center gap-3 mt-2 text-[10px]">
                                        <a href={projects.pomodoro.repoLink} target="_blank" className="hover"><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href={projects.pomodoro.liveLink} target="_blank" className="hover"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide  className="relative h-64 overflow-hidden rounded-[50px]">
                                <img src={projects.todoList.src} alt={projects.todoList.alt} className="absolute inset-0 w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl px-4 py-3 w-[85%] max-w-xs text-center shadow-lg">
                                    <h3 className="text-[12px]">{projects.todoList.title}</h3>
                                    <p className="text-[10px]">{projects.todoList.description}</p>
                                    <div className="flex justify-center gap-3 mt-2 text-[10px] ">
                                        <a href={projects.todoList.repoLink} target="_blank" className="hover"><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href={projects.todoList.liveLink} target="_blank" className="hover"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="relative h-64 overflow-hidden rounded-[50px]">
                               <img src={projects.quoteGenerator.src} alt={projects.quoteGenerator.alt} className="absolute inset-0 w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl px-4 py-3 w-[85%] max-w-xs text-center shadow-lg">
                                    <h3 className="text-[12px]">{projects.quoteGenerator.title}</h3>
                                    <p className="text-[10px]">{projects.quoteGenerator.description}</p>
                                    <div className="flex justify-center gap-3 mt-2 text-[10px] ">
                                        <a href={projects.quoteGenerator.repoLink} target="_blank" className="hover"><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href={projects.quoteGenerator.liveLink} target="_blank" className="hover"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="relative h-64 overflow-hidden rounded-[50px]">
                                <img src={projects.suptem.src} alt={projects.suptem.alt} className="absolute inset-0 w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl px-4 py-3 w-[85%] max-w-xs text-center shadow-lg">
                                    <h3 className="text-[12px]">{projects.suptem.title}</h3>
                                    <p className="text-[10px]">{projects.suptem.description}</p>
                                    <div className="flex justify-center gap-3 mt-2 text-[10px] ">
                                        <a href="#" target="_blank" className="hover"><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href={projects.suptem.liveLink} target="_blank" className="hover"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    
                </div>
                
                
        </div>
    )
}
