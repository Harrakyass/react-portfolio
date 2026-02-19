import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        companyName: "Suptem",
        title: "Web Development Intern",
        linkedIn: "https://www.linkedin.com/company/suptem/",
        period: "Aug 2024 - Oct 2024",
        tasks: [
            "Collaborated with a team to design, develop, and launch the school's official website using WordPress.",
            "Customized themes, improved UI/UX, and optimized mobile responsiveness.",
            "Configured SEO, security, and performance plugins for maximum reach."
        ]
    },
    {
        companyName: "RHCPMA",
        title: "Web Development Intern",
        linkedIn: "https://www.linkedin.com/company/rhcpma/",
        period: "Jun 2025 - Sep 2025",
        tasks: [
            "Developed a secure web application enabling client document uploads via dedicated sessions.",
            "Implemented an access control system with time-limited submission windows.",
            "Designed a clean admin dashboard for user and document management."
        ]
    },
];

export default function Experience () {
    const [tab, setTab] = useState(0);
    
    return (
        <div id="Experience" className=" bg-secondary/20 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-accent text-3xl md:text-4xl font-bold whitespace-nowrap">Experience</h2>
                    <div className="h-[2px] w-full bg-gradient-to-r from-accent/50 to-transparent"></div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Tab List */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-white/10 min-w-[150px]">
                        {experiences.map((exp, index) => (
                            <button 
                                key={index} 
                                className={`py-4 px-6 text-left transition-all duration-300 font-medium text-sm
                                    ${tab === index 
                                        ? 'text-accent border-b-2 md:border-b-0 md:border-l-4 border-accent bg-accent/5' 
                                        : 'text-primary/40 hover:text-primary hover:bg-white/5'}`} 
                                onClick={() => setTab(index)}
                            >
                                {exp.companyName}
                            </button>
                        ))}
                    </div>

                    {/* Active Content */}
                    <div className="flex-1 min-h-[300px] animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-primary text-2xl font-bold mb-1">
                            {experiences[tab].title} 
                            <a href={experiences[tab].linkedIn} target="_blank" className="text-accent ml-2 hover:opacity-80 transition-opacity">
                                <span className="text-accent/50 mr-1 font-normal">@</span>
                                {experiences[tab].companyName}
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs" />
                            </a>
                        </h3>
                        <p className="font-mono text-xs text-primary/40 mb-6 uppercase tracking-widest">{experiences[tab].period}</p>
                        
                        <ul className="space-y-4">
                            {experiences[tab].tasks.map((task, i) => (
                                <li key={i} className="flex items-start text-primary/70 text-sm leading-relaxed">
                                    <FontAwesomeIcon icon={faCaretRight} className="text-accent mt-1 mr-3 flex-shrink-0" />
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}