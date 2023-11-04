import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import MainButton from "../components/MainButton";
import TechnologiesSectionEl5 from "../components/TechnologiesSectionEl-5";


function Main() {
  return <Grid container>
    <MainButton 
        text='почати навчання прямо зараз'
        sx={{
          width:'410px',
          height:'152px',
          fontSize: '40px',
          lineHeight: '36.5px',
          padding:'2px'
          }}/> 
  <TechnologiesSectionEl5/>
  </Grid>;
}

export default Main;
