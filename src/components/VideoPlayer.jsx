
import React from "react";
import {Grid} from "@mui/material";



export default function VideoPlayer({videoid}) {
    return(
            <Grid item container direction='row' spacing={2} justifyContent="center"
  alignItems="center">
                <Grid item xs={8} md={6} sx={{ textAlign:'center'}} border='solid white'>
                    <iframe className="video"   title="youtube video"
                            src={`http://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                            frameborder="0" allowFullScreen autoPlay='1' allow="autoplay"  width='640px' height='360px' />
                </Grid>
            </Grid>
    )
}