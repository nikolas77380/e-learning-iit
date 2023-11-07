
import React from "react";
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {Typography} from "@mui/material";
import { useState } from "react";


export default function VideoPlayer({videoid, img, name, position}) {
    const titleStyle = {
        fontFamily: 'Montserrat',
        fontSize: '.9375rem',
        fontWeight: '700',
        letterSpacing: '0.0188rem',
        textAlign: 'left',
        textTransform:'uppercase',
        color:'white',
        paddingTop:'3.75rem'
    }

    const positionStyle = {
        fontFamily: 'Roboto',
        fontSize: '0.8125rem',
        fontWeight: '800',
        letterSpacing: 0,
        textAlign: 'left',
        marginTop:'0.3125rem',
        color:'rgba(176, 176, 176, 1)'
    }

    const [isHovered, setIsHovered] = useState(0);
    const handleMouseOver = () => {
        setIsHovered(1);
    };
    const handleMouseLeave = () => {
        setIsHovered(0);
    }

    const videoStyle = {
        width:'320px',
        position:'relative',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s'
    }
    console.log(isHovered);


    return (
        <div style={videoStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <iframe className="video"   title="youtube video"
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=${isHovered}&mute=1`}
                    frameborder="0" allowFullScreen  width='320px' height='180px' />
            <Avatar alt="Remy Sharp" src={img} sx={{ width: '4.7rem', height: '4.7rem', position:'absolute', top:'170px'}}/>      
            <Grid direction="column" spacing={2} margin='0 40px 40px 0'>
                <Typography sx={titleStyle}> 
                    {name}
                </Typography>
                <p style={positionStyle}> 
                    {position}
                </p>
            </Grid>
         </div>
                    
                    
               
    )
}