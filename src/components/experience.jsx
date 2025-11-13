import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        companyName: "Suptem BMHS",
        title: "Web Development Intern @",
        linkedIn: "https://www.linkedin.com/company/suptem/",
        period: "Aug 2024 - Oct 2024",
        tasks: [
            "Collaborated with a team to design, develop, and launch the university's official website using WordPress.",
            "Customized themes, improved UI/UX, ensured mobile responsiveness, and optimized performance.",
            "Configured SEO, security, and performance plugins and integrated social media management."
        ]
    },
    {
        companyName: "RHCPMA",
        title: "Web Development Intern @",
        linkedIn: "https://www.linkedin.com/company/rhcpma/",
        period: "Jun 2025 - Sep 2025",
        tasks: [
            "Developed a secure web application enabling each client to upload documents through a dedicated session.",
            "Implemented an access control system with client accounts and time-limited file submission.",
            "Designed an admin dashboard to manage users, submission periods, and received documents."
        ]
    }
];




export default function Experience () {
    
    return (
        <div className="">
            <div className="section-title">
                <h2>Experience</h2>
            </div>
            <div>
                {
                    experiences.map((experience, index) => (
                        <div key={index}>
                            <div>
                                <h3>{experience.companyName}</h3>
                            </div>
                            <div>
                                <h2>{experience.title} @{experience.companyName}</h2>
                                <h4>{experience.period}</h4>
                                <ul>
                                    {experience.tasks.map((task,taskIndex)=> (
                                        <li key={taskIndex}><FontAwesomeIcon className="text-accent" icon={faCaretRight} /> {task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                    ))
                }

            </div>
        </div>
    )

}