import React from 'react';
import './style2.css';
import { Grid } from '@mui/material';

import bootstrap from '../images/icons/bootstrap_icon.png'
import css from '../images/icons/css3_icon.png';
import git from '../images/icons/git_square_icon.png';
import github from '../images/icons/github_hosting_internet_icon.png';
import html from '../images/icons/html_icon.png';
import mui from '../images/icons/mui_icon.png';
import react from '../images/icons/react_icon.png';
import js from '../images/icons/javascript_icon.png';
import image from '../images/technologies.JPG';

const iconLinksDesctop = [
  { url: 'https://git-scm.com', icon: git, width: 154, height:131 },
  { url: 'https://en.wikipedia.org/wiki/JavaScript', icon: js, width: 150, height:133 },
  { url: 'https://legacy.reactjs.org', icon: react, width: 146, height:145 },
  { url: 'https://en.wikipedia.org/wiki/HTML ', icon: html, width: 132, height:132 },
  { url: 'https://en.wikipedia.org/wiki/CSS', icon: css, width: 135, height:125 },
  { url: 'https://getbootstrap.com', icon: bootstrap, width: 169, height:162 }
];

const iconLinksMobile = [
    { url: 'https://git-scm.com', icon: git, width: 119, height:109 },
    { url: 'https://en.wikipedia.org/wiki/JavaScript', icon: js, width: 102, height:86 },
    { url: 'https://legacy.reactjs.org', icon: react, width: 89, height:92 },
    { url: 'https://en.wikipedia.org/wiki/HTML ', icon: html, width: 88, height:82 },
    { url: 'https://en.wikipedia.org/wiki/CSS', icon: css, width: 86, height:87 },
    { url: 'https://getbootstrap.com', icon: bootstrap, width: 106, height:106 },
    { url: 'https://github.com/', icon: github, width: 98, height:87 },
    { url: 'https://mui.com/', icon: mui, width: 93, height:98 }
  ];


function TechnologiesSectionEl5() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      height:'100vh',
      backgroundPosition:'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
        }}>
        <div style={{
            backgroundColor:' rgba(0, 0, 0, 0.3)',
            height:'100vh',
            width:'100%'
            }}>
                <Grid container direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <h1 style={{
                        fontFamily: 'Montserrat',
                        fontSize: '70px',
                        fontWeight: '700',
                        lineHeight: '85px',
                        letterSpacing: '1px',
                        textAlign: 'center',
                        color:'white',
                        textTransform:'uppercase',
                        width:'895px'
                        }}>
                            Які технології Ви вивчите
                    </h1>
        
                    <Grid sx={{ display: { md: 'flex', xs: 'none' } }} container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        <Grid container spacing={8} item xs={8} md={6} direction="row" justifyContent="center" alignItems="center" >
                            {iconLinksDesctop.map((link, index) => (
                                <Grid className='icon' key={index} item xs={4} direction="row" justifyContent="center" alignItems="center">
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{ width: link.width, height: link.height, display:'block', margin:'0 auto'}} />
                                    </a>
                                </Grid> 
                            ))}
                        </Grid>
                    </Grid>
                    <Grid sx={{marginTop:'120px', display: { md: 'none', xs: 'flex' } }} container spacing={1} direction="row" justifyContent="center" alignItems="center">
                        <Grid container spacing={3} item xs={8} direction="row" justifyContent="center" alignItems="center" >
                            {iconLinksMobile.map((link, index) => (
                                <Grid className='icon' key={index} item xs={3} direction="row" justifyContent="center" alignItems="center" margin='5px'>
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{ width: link.width, height: link.height, display:'block', margin:'0 auto'}} />
                                    </a>
                                </Grid> 
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    </div>
  );
}

export default TechnologiesSectionEl5;