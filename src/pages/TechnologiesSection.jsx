import React from 'react';
import './style.css';
import { Grid, Typography } from '@mui/material';
import MainTitle from "../components/MainTitle";
import css from '../images/icons/cssIcon.svg';
import git from '../images/icons/gitIcon.svg';
import github from '../images/icons/githubIcon.svg';
import html from '../images/icons/htmlIcon.svg';
import mui from '../images/icons/muiIcon.svg';
import react from '../images/icons/reactIcon.svg';
import js from '../images/icons/jsIcon.svg';
import image from '../images/technologies.JPG';
import bootstrap from '../images/icons/bootstrapIcon.svg'

const iconLinks = [
  { url: 'https://git-scm.com', icon: git},
  { url: 'https://en.wikipedia.org/wiki/JavaScript', icon: js},
  { url: 'https://legacy.reactjs.org', icon: react },
  { url: 'https://en.wikipedia.org/wiki/HTML ', icon: html},
  { url: 'https://en.wikipedia.org/wiki/CSS', icon: css },
  { url: 'https://getbootstrap.com', icon: bootstrap, },
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
      alignItems: 'center',
      position:'relative'
}

const titleStyle = {
   fontSize: '3.5rem', 
   fontFamily: 'Montserrat',
   fontWeight: '700',
   lineHeight: '5.3125rem',
   letterSpacing: '.0625rem',
   textAlign: 'center',
   color:'white',
   textTransform:'uppercase',
   margin:'auto'
}



function TechnologiesSection() {
  return (
    <Grid className='1' container xs={12} md={12} style={mainImageStyle}>
        <Grid className='2' item xs={12} md={12}  sx={{ display:'flex',
            backgroundColor:' rgba(0, 0, 0, 0.3)',
            height:'100vh',
            }}>
                <Grid className='3' container item xs={12} direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Grid className='title' container item xs={11} md={8} xl={10} display='flex'>
                      <MainTitle 
                        text={'Які технології Ви вивчите'}
                        sx={titleStyle}/>
                      </Grid>
                    <Grid className='icons'container direction="row" justifyContent="center" alignItems="center" alignContent='center' marginTop='20px' >
                        <Grid container  spacing={4} item xs={10} md={10} lg={8} direction="row" justifyContent="center" alignItems="center" alignContent='center'>
                            {iconLinks.map((link, index) => (
                                <Grid container className='icon' key={index} item xs={4} sm={3} md={3} >
                                     <a  href={link.url} target="_blank">
                                         <img src={link.icon} alt={`Icon ${link.icon}`} style={{width:'90%',  display:'block'}} />
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