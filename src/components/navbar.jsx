import React from 'react';

export default function Navbar() {
    const navBrand = {
        name: "Cherif Harrak Yasser",
        link: "#"
    };
    const mainNav = ["AboutMe", "Projects", "Experience"];
    const socialMediaNav = {
        email: {
            icon: "Email",
            link: "yassir.ch213@gmail.com"
        },
        github: {
            icon: "Github",
            link: "https://github.com/Harrakyass/"
        }, 
        linkedin: {
            icon: "LinkedIn",
            link: "https://www.linkedin.com/in/cherifharrakyasser/"
        },
        instagram: {
            icon: "Instagram",
            link: "https://www.instagram.com/harrakyass/"
        }
    };
  
    return (
        <nav className="navbar">
            {/* nav-brand */}

            <div className="navbar-brand">
                <a href={navBrand.link}>{navBrand.name}</a>
            </div>

            {/*  main Navbar */}

            <div className="main-nav">
                <ul>
                    {
                        mainNav.map(
                            (value, key)=> 
                                <li key={key}><a href="#">{value}</a></li>

                        )
                    }
                </ul>
            </div>


                {/* Social media Navbar */}
            <div className="navbar-social">
                    <ul>
                        {
                            Object.entries(socialMediaNav).map(([key, value]) => 
                                <li key={key}><a href={value.link} target="_blank" rel="noreferrer">{value.icon}</a></li>
                            )
                        }
                    </ul>
            </div>
        </nav>
    )

}