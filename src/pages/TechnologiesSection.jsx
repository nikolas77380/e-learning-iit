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
   fontSize: '3rem', 
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
    <Grid container xs={12} md={12} style={mainImageStyle}>
        <Grid item xs={12} sx={{
            backgroundColor:' rgba(0, 0, 0, 0.3)',
            height:'100%'
            }}>
                <Grid container item xs={12} direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Grid container item md={6} margin='20px 0'>
                      <MainTitle 
                        text={'Які технології Ви вивчите'}
                        sx={titleStyle}/>
                      </Grid>
                    <Grid  container spacing={3}  direction="row" justifyContent="center" alignItems="center" alignContent='center' marginTop='20px' >
                        <Grid container  spacing={3} item xs={8} md={10} direction="row" justifyContent="center" alignItems="center" >
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
        </Grid>
    </Grid>
  );
}

export default TechnologiesSection;