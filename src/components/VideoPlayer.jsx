
import React from "react";
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {Typography} from "@mui/material";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        position:'relative'
      };

    const [isHovered, setIsHovered] = useState(0);
    const handleMouseOver = () => setIsHovered(1);
    const handleMouseLeave = () => setIsHovered(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(open);


    const videoStyle = {
        width:'320px',
        position:'relative',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s'
    }

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
      };
    
    
    return (
        <div 
          style={videoStyle} 
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseLeave} 
          onClick={handleOpen}>
            <iframe className="video"   title="youtube video" onClick={handleOpen}
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=${isHovered}&mute=1&enablejsapi=0`}
                    frameBorder="0" allowFullScreen  width='320px' height='180px' />
            <div style={overlayStyle}></div>
            <Avatar alt="Remy Sharp" src={img} sx={{ width: '4.7rem', height: '4.7rem', position:'absolute', top:'170px'}}/>      
            <Grid container direction="column" spacing={2} margin='0 40px 40px 0'>
                <Typography sx={titleStyle}> 
                    {name}
                </Typography>
                <p style={positionStyle}> 
                    {position}
                </p>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <Box sx={style}>
                    <Button aria-label="close" color="primary" style={{position:'absolute', top:'0', right:'0'}} onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                    <iframe className="video"   title="youtube video"
                            src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                            frameBorder="0" allowFullScreen  width='640px' height='360px' />
                </Box>
            </Modal>
         </div>
                    
                    
               
    )
}