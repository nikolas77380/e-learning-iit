import React from "react";
import Grid from "@mui/material/Grid";
import VideoPlayer from "../components/VideoPlayer";

const videoList  = [
  {videoid:'ymGB1lqP1CM', name:'Anastasia Koppika', photo:'', position:'freelance web developer'},
  {videoid:'HfTXHrWMGVY', name:'Anastasia Koppika', photo:'', position:'freelance web developer'}
]
function FeedbackSection() {
  return (
     <Grid container direction='row' spacing={2} justifyContent="center"
  alignItems="center" sx={{backgroundColor:'black'}}>
    {videoList.map((id, index) => (
      <Grid item key={index} xs={8} md={6} sx={{ textAlign:'center'}} > 
      <div style={{display:'flex', justifyContent:'center'}}>
        <VideoPlayer 
        videoid={id.videoid}
        name={id.name}
        img={id.photo}
        position={id.position}
        />
      </div>
        
      </Grid>  
    ))}
     </Grid>
  )
}

export default FeedbackSection;
