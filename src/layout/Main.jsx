import React from "react";
import Grid from "@mui/material/Grid";
import HeroSection from "../Pages/HeroSection";
import WhySection from "../Pages/WhySection";

function Main() {
  return (
    <Grid container>
      <Grid item>
        <HeroSection />
      </Grid>
      <Grid item>
        <WhySection />
      </Grid>
    </Grid>
  );
}

export default Main;
