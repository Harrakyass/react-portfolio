import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const socialMediaNav = [
  {
    name: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    link: "mailto:yassir.ch213@gmail.com"
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} />,
    link: "https://github.com/Harrakyass/"
  },
  {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    link: "https://www.linkedin.com/in/cherifharrakyasser/"
  },
  {
    name: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
    link: "https://www.instagram.com/harrakyass/"
  }
];