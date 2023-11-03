import React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import EL2 from "../Pages/WhySection";
import EL1 from "../Pages/El1";

function Main() {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <EL1 />
      </Grid>
      <Grid item xs={12} md={12}>
        <EL2 />
      </Grid>
    </Grid>
  );
}

export default Main;
