
import React from "react";
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {Typography} from "@mui/material";


export default function VideoPlayer({videoid, img, name, position}) {
    const titleStyle = {
        fontFamily: 'Montserrat',
        fontSize: '.9375rem',
        fontWeight: '700',
        letterSpacing: '0.0188rem',
        textAlign: 'left',
        textTransform:'uppercase',
        color:'white',
        paddingTop:'60px'
    }

    const positionStyle = {
        fontFamily: 'Roboto',
        fontSize: '0.8125rem',
        fontWeight: '800',
        letterSpacing: 0,
        textAlign: 'left',
        marginTop:'5px',
        color:'rgba(176, 176, 176, 1)'
    }

    return (
        <div style={{width:'320px', position:'relative'}}>
            <iframe className="video"   title="youtube video"
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
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