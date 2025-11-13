import * as React from 'react';
import backrgroundImg from '../assets/black-white.png';
import { socialMediaNav } from './socialMedia';


export default function Navbar() {
  const navBrand = {
    name: "Cherif Harrak Yasser",
    link: {backrgroundImg}
  };

  const mainNav = ["About Me", "Projects", "Experience"];



  return (
    <nav className="font-poppins flex justify-between px-5 md:px-0 md:justify-around items-center bg-secondary text-primary sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-20 h-20 md:w-25 md:h-25">
          <a href="#"><img src={backrgroundImg} alt="black-white.png"/></a>
        </div>

        <div className="hidden sm:block">
          <ul className="flex">
            {
              mainNav.map((value, key) => 
                <li key={key} className="ml-10  hover"><a href={`#${value}`}>{value}</a></li>
              ) 
            }
          </ul>
        </div>
      </div>

      <div className="">
        <ul className="flex">
          {socialMediaNav.map((social, key) => (
            <li key={key} className="ml-2 hover">
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        
      </div>
    </nav>
    
  )
}
