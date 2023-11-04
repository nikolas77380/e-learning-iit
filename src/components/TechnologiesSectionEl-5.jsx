import React from 'react';
import './style2.css';
import { Grid, Typography } from '@mui/material';

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
  { url: 'https://git-scm.com', icon: git },
  { url: 'https://en.wikipedia.org/wiki/JavaScript', icon: js},
  { url: 'https://legacy.reactjs.org', icon: react },
  { url: 'https://en.wikipedia.org/wiki/HTML ', icon: html },
  { url: 'https://en.wikipedia.org/wiki/CSS', icon: css },
  { url: 'https://getbootstrap.com', icon: bootstrap }
];

const iconLinksMobile = [
    { url: 'https://github.com/', icon: github },
    { url: 'https://mui.com/', icon: mui }
  ];


function TechnologiesSectionEl5() {
  return (
    <Grid style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      width:'100%',
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
                      <Grid md={6} margin='60px'>
                        <Typography  sx={{ fontSize: { md: '4.5rem', xs: '3.5rem' }, margin:'20px' }} 
                          style={{
                          fontFamily: 'Montserrat',
                          fontWeight: '700',
                          lineHeight: '85px',
                          letterSpacing: '1px',
                          textAlign: 'center',
                          color:'white',
                          textTransform:'uppercase',
                          }}>
                              Які технології Ви вивчите
                        </Typography>
                      </Grid>
                    <Grid  container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid container  spacing={8} item xs={8} md={6} direction="row" justifyContent="center" alignItems="center" >
                            {iconLinksDesctop.map((link, index) => (
                                <Grid className='icon' key={index} item xs={4} direction="row" justifyContent="center" alignItems="center">
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{  display:'block', margin:'0 auto'}} />
                                    </a>
                                </Grid> 
                            ))}   
                        </Grid>
                        <Grid sx={{ display: { md: 'none', xs: 'flex' } }} container spacing={8} item xs={10} direction="row" justifyContent="center" alignItems="center" >
                            {iconLinksMobile.map((link, index) => (
                                <Grid className='icon' key={index} item xs={4} direction="row" justifyContent="center" alignItems="center">
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{ width:'9rem', display:'block', margin:'0 auto'}} />
                                    </a>
                                </Grid> 
                            ))}   
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    </Grid>
  );
}

export default TechnologiesSectionEl5;