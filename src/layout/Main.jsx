import React from "react";
import Grid from "@mui/material/Grid";

import TechnologiesSection from "../pages/TechnologiesSection";
import FeedbackSection from "../pages/FeedbackSection";      
import CourseProgramm from "../pages/CourseProgramm";
import WhySection from "../pages/WhySection";
import HeroSection from "../pages/HeroSection";
import FaqSection from "../pages/Faq";

function Main() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <HeroSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <WhySection />
      </Grid>
      <Grid item xs={12} md={12}>
        <CourseProgramm />
      </Grid>
      <Grid item xs={12} md={12}>
        <TechnologiesSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FeedbackSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FaqSection />
      </Grid>
    </Grid>
  );
}

export default Main;
