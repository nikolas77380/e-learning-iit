import React from "react";
import Grid from "@mui/material/Grid";

import TechnologiesSection from "../pages/TechnologiesSection";
import FeedbackSection from "../pages/FeedbackSection";
import CourseProgramm from "../pages/CourseProgramm";
import WhySection from "../pages/WhySection";
import HeroSection from "../pages/HeroSection";
import FaqSection from "../pages/Faq";
import SphereSection from "../pages/SphereSection";
import SalarySection from "../pages/SalariesSection";
import PricesSection from "../pages/PricesSection";
import FooterSection from "../pages/FooterSection";
import FooterSection2 from "../pages/FooterSection2";

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
        <SphereSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <TechnologiesSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FeedbackSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <SalarySection />
      </Grid>
      <Grid item xs={12} md={12}>
        <PricesSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FaqSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FooterSection />
      </Grid>
      <Grid item xs={12} md={12}>
        <FooterSection2 />
      </Grid>
    </Grid>
  );
}

export default Main;
