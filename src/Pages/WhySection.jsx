import React from "react";
import { Grid } from "@mui/material";
import MainTitle from "../components/MainTitle";
import WhyComponents from "../components/WhyComponents";
import WhyText from "../constants/WhyConstants";
import "./style.css";

const WhySection = () => {
  return (
    <Grid
      container
      spacing={3}
      className="el2-page"
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
        }}
      >
        <MainTitle
          text={"ЧОМУ ТОБІ ПОТРІБЕН ЦЕЙ КУРС?"}
          sx={{
            fontFamily: "Montserrat",
            color: "#FFFFFF",
            fontSize: "70px",
            textAlign: "center",
            width: "55rem",
            marginTop: "2rem",
          }}
        />
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
