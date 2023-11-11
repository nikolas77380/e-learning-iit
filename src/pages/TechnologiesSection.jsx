import React from 'react';
import './style.css';
import { Grid, Typography } from '@mui/material';
import MainTitle from "../components/MainTitle";
import bootstrap from '../images/icons/bootstrap_icon.png'
import css from '../images/icons/css3_icon.png';
import git from '../images/icons/git_square_icon.png';
import github from '../images/icons/github2.png';
import html from '../images/icons/html_icon.png';
import mui from '../images/icons/mui3.png';
import react from '../images/icons/react_icon.png';
import js from '../images/icons/javascript_icon.png';
import image from '../images/technologies.JPG';

const iconLinks = [
  { url: 'https://git-scm.com', icon: git},
  { url: 'https://en.wikipedia.org/wiki/JavaScript', icon: js},
  { url: 'https://legacy.reactjs.org', icon: react },
  { url: 'https://en.wikipedia.org/wiki/HTML ', icon: html},
  { url: 'https://en.wikipedia.org/wiki/CSS', icon: css },
  { url: 'https://getbootstrap.com', icon: bootstrap},
  { url: 'https://github.com/', icon: github},
  { url: 'https://mui.com/', icon: mui }
];

const mainImageStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      
      height:'100vh',
      backgroundPosition:'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
}

const titleStyle = {
   fontSize: { xl: '4.5rem', md:'3.5rem', xs: '3rem' }, 
   fontFamily: 'Montserrat',
   fontWeight: '700',
   lineHeight: '5.3125rem',
   letterSpacing: '.0625rem',
   textAlign: 'center',
   color:'white',
   textTransform:'uppercase'
}



function TechnologiesSection() {
  return (
    <Grid container xs={12} style={mainImageStyle}>
        <div style={{
            backgroundColor:' rgba(0, 0, 0, 0.3)',
            height:'100vh',
            width:'100%'
            }}>
                <Grid container xs={12} direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                      <Grid md={6} margin='3.75rem'>
                      <MainTitle 
                        text={'Які технології Ви вивчите'}
                        sx={titleStyle}/>
                      </Grid>
                    <Grid  container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid container  spacing={4} item xs={8} md={10} direction="row" justifyContent="center" alignItems="center" >
                            {iconLinks.map((link, index) => (
                                <Grid container className='icon' key={index} item xs={4} md={3} direction="row" justifyContent="center" alignItems="center">
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{width:'100%',  display:'block', margin:'0 auto'}} />
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

export default TechnologiesSection;