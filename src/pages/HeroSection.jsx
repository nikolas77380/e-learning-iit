import React from "react";
import { Typography, Grid } from "@mui/material";
import MainButton from "../components/MainButton";
import "./style.css";

const HeroSection = () => {
  return (
    <Grid
      container
      className="el1-container"
      //   sx={{ justifyContent: "space-betwin" }}
    >
      <Grid
        item
        xs={11}
        md={11}
        className="el1-block"
        sx={{ marginTop: "-10rem" }}
      >
        <Typography variant="h2" className="el1-title">
          <b>FRONT-END</b> <br />
          РОЗРОБНИК З <b>0</b>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className="el1-block"
        sx={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "25rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Typography
            variant="h1"
            className="el1-salary-text"
            sx={{ color: "red" }}
          >
            <b>199$</b>
          </Typography>
          <Typography
            variant="h2"
            className="el1-salary-text-small"
            sx={{ color: "black" }}
          >
            <span className="salary-text">800$</span>
          </Typography>
        </div>
        <MainButton text="Почати навчання прямо зараз" className="el1-button" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
