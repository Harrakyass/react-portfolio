import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

export default function Navbar() {
  const navBrand = {
    name: "Cherif Harrak Yasser",
    link: "#"
  };

  const mainNav = ["AboutMe", "Projects", "Experience"];

  const socialMediaNav = [
    {
      name: "Email",
      icon: <EmailIcon />,
      link: "mailto:yassir.ch213@gmail.com"
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/Harrakyass/"
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/cherifharrakyasser/"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/harrakyass/"
    }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#C8D9E6", color: "#0A1123" }}>
      <Box sx={{ width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT SIDE: Brand + Main Nav */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="a"
              href={navBrand.link}
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {navBrand.name}
            </Typography>

            {/* mainNav - visible only on md and up */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {mainNav.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: 'inherit',
                    mx: 1
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE: Social Media */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {socialMediaNav.map((social) => (
              <IconButton
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                sx={{ mx: 0.5 }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
