import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import pomodoro from '../assets/screenshot.png';
import todoList from '../assets/todo-list.png';
import suptem from '../assets/suptem.png';
import quotes from '../assets/quotes.png';

const Carousel = ({ 
  items, 
  autoPlay = false, 
  interval = 3000,
  showDots = true,
  showArrows = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="min-w-full"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-secondary/80 hover:bg-secondary text-accent p-2 rounded-full transition-all duration-200 z-10 border border-accent"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-secondary/80 hover:bg-secondary text-accent p-2 rounded-full transition-all duration-200 z-10 border border-accent"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-accent w-8' 
                  : 'bg-primary/50 hover:bg-primary w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Your Projects Component with Carousel
export default function Projects() {
    const projectSummary = "I take pride in developing creative and functional web applications that showcase my skills in front-end and full-stack development. Each project highlights a unique aspect of my expertise, from dynamic, responsive designs to robust back-end functionality. Whether it's creating a portfolio website, a productivity tool, or an engaging user experience, my work is driven by a commitment to innovation and usability. Below are a few of my projects that demonstrate my dedication to crafting effective and user-friendly solutions.";
    
    const projects = [
        {
            src: {pomodoro},
            alt: "Pomodoro App Screenshot",
            title: "Pomodoro App",
            liveLink: "https://harrakyass.github.io/pomodoro-app/",
            repoLink: "https://github.com/Harrakyass/pomodoro-app",
            description: "A productivity app designed to help users manage time effectively with the Pomodoro technique."
        },
        {
            src: {todoList},
            alt: "Todo List App Screenshot",
            title: "Todo List",
            liveLink: "https://harrakyass.github.io/to-do-list/",
            repoLink: "https://github.com/Harrakyass/to-do-list",
            description: "A task management app allowing users to add, edit, and remove tasks with local storage functionality."
        },
        {
            src: {quotes},
            alt: "Quote generator screenshot",
            title: "Quote Generator",
            liveLink: "https://harrakyass.github.io/quote_generator/",
            repoLink: "https://github.com/Harrakyass/quote_generator",
            description: "A minimalist and elegant quote generator built with React and Vite."
        },
        {
            src: {suptem},
            alt: "suptembmhs.com Screenshot",
            title: "Suptem Bmhs Website",
            liveLink: "https://suptembmhs.com/",
            repoLink: null,
            description: "A dynamic school website built with WordPress, featuring SEO optimization and responsive design."
        }
    ];

    const carouselSlides = projects.map((project, index) => (
        <div key={index} className="relative bg-secondary">
            <img 
                src={project.src} 
                alt={project.alt}
                className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary via-secondary/95 to-transparent p-6">
                <h3 className="text-accent text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex gap-4">
                    {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-primary transition-colors duration-200 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <span className="text-sm">Live Demo</span>
                        </a>
                    )}
                    {project.repoLink && (
                        <a 
                            href={project.repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent hover:text-primary transition-colors duration-200 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    ));

    return (
        <div className="section-border">
            <div className="section-title">
                <h2>Projects</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center px-10">
                <div className="text-primary text-[12px] lg:text-[15px]">
                    <p>{projectSummary}</p>
                </div>
                <div className="w-full">
                    <Carousel 
                        items={carouselSlides}
                        autoPlay={true}
                        interval={5000}
                        showDots={true}
                        showArrows={true}
                    />
                </div>
            </div>
        </div>
    );
}