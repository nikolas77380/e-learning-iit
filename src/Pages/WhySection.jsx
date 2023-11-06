import React from "react";
import { Grid } from "@mui/material";
import MainTitle from "../components/MainTitle";
import WhyComponents from "../components/WhyComponents";
import "./style.css";

const WhySection = () => {
  const whyTitle = {
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    fontSize: "70px",
    textAlign: "center",
    marginTop: "2rem",
    display: "flex",
    textTransform: "uppercase",
  };
  return (
    <Grid
      container
      spacing={3}
      className="why-page"
      sx={{ display: "flex", alignContent: "center" }}
    >
      <Grid
        item
        xs={12}
        md={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <MainTitle text={"ЧОМУ ТОбІ ПОТРІБЕН ЦЕЙ КУРС?"} sx={whtTitle} />
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
        xs={12}
        md={12}
      >
        <WhyComponents />
      </Grid>
    </Grid>
  );
};

export default WhySection;
