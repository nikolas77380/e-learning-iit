import React from "react";
import Grid from "@mui/material/Grid";
import WhySection from "../Pages/WhySection";
import HeroSection from "../Pages/HeroSection";

function Main() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <HeroSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <WhySection />
      </Grid>
    </Grid>
  );
}

export default Main;
