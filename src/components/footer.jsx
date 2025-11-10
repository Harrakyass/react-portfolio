import React from 'react';
import { socialMediaNav } from './socialMedia';


export default function Footer() {
    const ownerName = "Cherif Harrak Yasser";
    const copyrightNotice = "All rights reserved.";
    const currentYear = new Date().getFullYear();


    return (
        <div className="bg-secondary text-primary flex flex-col items-center">
            <div className="font-sm flex flex-col md:flex-row">
                <p>Built by {ownerName}.</p>
                <p className="ml-2 mb-2">{copyrightNotice} &copy;{currentYear}  </p>
            </div>
            <div>
                <ul className="flex mb-2">
                    {socialMediaNav.map((social, key) => (
                        <li key={key} className="ml-2 hover">
                        <a href={social.link} target="_blank" rel="noreferrer">
                            {social.icon}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        
    )
}