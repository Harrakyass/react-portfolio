import React from 'react';
import profileImg from '../assets/profile.png';


export default function About() {
    const aboutMeP = "I’m a third-year IT student specializing in web development, with a strong foundation in programming and a passion for creating engaging, user-friendly applications. Inspired by creativity from anime, manga, and video games, I channel this into developing innovative projects. Currently honing my skills in JavaScript and full-stack development, I aim to combine technical expertise with creativity to build meaningful solutions.";
    const frontEnd = ['html', 'CSS', 'javascript'];
    const backEnd = ['PHP', 'SQL'];
    const softwares = ['Adobe Photoshop', 'Illustrator', 'Premiere Pro'];
    const cms = "Wordpress";
    const eCommercePla = "WooCommerce";
    const profile = {
        src: profileImg,
        alt: "profile picture"
    }

    return (
        <>
            <div>
                <h2>About me</h2>
                <p>{aboutMeP}</p>
                <h3>Here are some technologies I have been working with:</h3>
                <ul>
                    <li>
                        <span>Front-End:</span>
                        <ul>
                            {
                                frontEnd.map(
                                    (value, key) => <li key={key}>{value}</li>
                                )
                            }
                        </ul>

                    </li>

                    <li>
                        <span>BackEnd:</span>
                        <ul>
                            {
                                backEnd.map(
                                    (value, key) => <li key={key}>{value}</li>
                                )
                            }
                        </ul>
                    </li>

                    <li>
                        <span>Software & Platforms:</span>
                        <ul>
                            <li>Softwares: {softwares.join(', ')}</li>
                            <li>CMS: {cms}</li>
                            <li>E-commerce Platform: {eCommercePla}</li>
                        </ul>
                    </li>

                </ul>
            </div>
            <img src={profile.src} alt={profile.alt}/>
        </>
    )

}