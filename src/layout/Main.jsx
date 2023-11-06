import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import MainButton from "../components/MainButton";
import VideoPlayer from "../components/VideoPlayer";

const videoList  = [
  {videoid:'ymGB1lqP1CM'},
  {videoid:'HfTXHrWMGVY'}
]
function Main() {
  return <Grid container>
    {videoList.map((id) => (
      <VideoPlayer videoid={id.videoid}/>
    ))}
  </Grid>;
}

export default Main;
