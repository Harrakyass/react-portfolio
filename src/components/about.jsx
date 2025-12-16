import React from 'react';
import profileImg from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


export default function About() {
    const aboutMeP = "I'm a web developer passionate about crafting visually engaging and intuitive digital experiences. Recently graduated with a focus on software and decision systems, I specialize in front-end development and enjoy blending logic with creativity. My inspiration often comes from anime, manga, and storytelling, which drive me to build projects that feel alive and meaningful. I'm currently expanding my full-stack skills and exploring ways to turn ideas into interactive realities.";
    const skills = ["HTML/CSS", "JavaScript", "ReactJS", "PHP", "JAVA/JEE", "SQL", "NodeJS"]
    const profile = {
        src: profileImg,
        alt: "profile picture"
    }

    return (
        <div className="border border-primary border-3 rounded-[100px] md:rounded-[113px] mx-10 md:mx-25">
            <div className="section-title">
                <h2 >About me</h2>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col items-center lg:mb-8 lg:ml-8"> 
                    <div className="text-primary text-[10px] md:text-[12px] lg:text-[15] p-10">
                        <p className="">{aboutMeP}</p>
                        <h3 className="mt-3 mb-2">Here are some technologies I have been working with:</h3>
                        <ul className="grid grid-cols-2 lg:grid-cols-3 ">
                            {
                                skills.map((value, key) => {

                                    return <li key={key}><FontAwesomeIcon className="text-accent" icon={faCaretRight} /> {value}</li>
                                })
                            }
                        </ul>
                    </div>

                    
                </div>
                <img className="hidden md:block rounded-full m-10 md:w-60 md:h-60  lg:w-80 lg:h-80" src={profile.src} alt={profile.alt}/>
            </div>
           
        </div>
    )

}