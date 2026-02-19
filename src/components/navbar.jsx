import * as React from 'react';
import backrgroundImg from '../assets/black-white.png';
import { socialMediaNav } from './socialMedia';

export default function Navbar() {
  const mainNav = ["About Me", "Projects", "Experience"];

  return (
    <nav className="font-poppins fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300">
      <div className="bg-secondary/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Brand/Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110">
              <img src={backrgroundImg} alt="logo" className="w-full h-full object-contain brightness-110"/>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <ul className="flex gap-8">
              {mainNav.map((value, key) => (
                <li key={key} className="relative group">
                  <a href={`#${value}`} className="text-xs uppercase tracking-[0.2em] font-medium text-primary/70 group-hover:text-accent transition-colors">
                    {value}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <ul className="flex gap-4 items-center">
          {socialMediaNav.map((social, key) => (
            <li key={key} className="text-primary/60 hover:text-accent transition-all duration-300 hover:-translate-y-1 text-lg">
              <a href={social.link} target="_blank" rel="noreferrer" title={social.name}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}