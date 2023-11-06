
import React from "react";
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Typography} from "@mui/material";


export default function VideoPlayer({videoid}) {
    return(
            <Grid item container direction='row' spacing={2} justifyContent="center"
  alignItems="center">
                <Grid item xs={8} md={6} sx={{ textAlign:'center'}} >
                    <iframe className="video"   title="youtube video"
                            src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                            frameborder="0" allowFullScreen  width='320px' height='180px' />
                    <Grid>
                    <Stack direction="column" spacing={2} margin='0 40px 40px'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '4.7rem', height: '4.7rem'}}/>
                        <Typography sx={{fontFamily: 'Montserrat',
                                    fontSize: '.9375rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.0188rem',
                                    textAlign: 'left',
                                    textTransform:'uppercase'
                                    }}> Anastasia Kopiika
                        </Typography>
                        <p style={{fontFamily: 'Roboto',
                                    fontSize: '0.8125rem',
                                    fontWeight: '800',
                                    letterSpacing: 0,
                                    textAlign: 'left',
                                    marginTop:'5px'
                                    }}> freelance web developer
                        </p>
                    </Stack>
                </Grid>
                </Grid>
                
            </Grid>
    )
}