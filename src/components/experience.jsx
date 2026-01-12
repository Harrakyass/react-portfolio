import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        companyName: "Suptem",
        title: "Web Development Intern ",
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
        title: "Web Development Intern ",
        linkedIn: "https://www.linkedin.com/company/rhcpma/",
        period: "Jun 2025 - Sep 2025",
        tasks: [
            "Developed a secure web application enabling each client to upload documents through a dedicated session.",
            "Implemented an access control system with client accounts and time-limited file submission.",
            "Designed an admin dashboard to manage users, submission periods, and received documents."
        ]
    },
    
];




export default function Experience () {
    const [tab, setTab] = useState(0);
    
    return (
        <div id="Experience" className="section-border p-10">
            <div className="flex  justify-center text-[25px] text-accent  md:text-[35px] mb-8">
                <h2>Experience</h2>
            </div>
            <div>
                        <div className="grid lg:grid-cols-3  lg:gap-20 justify-center text-primary " >
                            <div className="flex flex-col" >
                                {
                                    experiences.map((company, index) => {

                                        return (
                                            <button key={index} className={`py-4 px-6 text-left cursor-pointer  font-bold ${tab === index ? 'active-tab' : 'inactive-tab'} `} onClick={() => setTab(index)}>{company.companyName}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-span-2 mt-3">
                                <h2 className="text-accent font-bold text-[20px]">
                                    {experiences[tab].title} 
                                    <span className="italic font-normal">@<a href={experiences[tab].linkedIn} target="_blank" rel="noopener noreferrer">{experiences[tab].companyName}</a></span>
                                </h2>
                                <h4 className="text-[15px] uppercase mb-4">{experiences[tab].period}</h4>
                                <ul>
                                    {experiences[tab].tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="text-[12px] mb-2">
                                            <FontAwesomeIcon className="text-accent" icon={faCaretRight} /> {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                        </div>
            </div>
        </div>
    )

}