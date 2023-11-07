import React from "react";
import Grid from "@mui/material/Grid";
import MainButton from "../components/MainButton";
import "./style.css";

const HeroSection = () => {
  const h2style = {
    fontFamily: "Aclonica",
    color: "#613D2A",
    fontSize: "3.5rem",
    textAlign: "center",
    textTransform: "uppercase",
    position: "absolute",
  };
  const buttonStyle = {
    width: "23.5rem",
    height: "9.5rem",
    fontSize: "2.5rem",
    lineHeight: "2.3rem",
    padding: "0.125rem",
  };
  return (
    <Grid container className="hero-container">
      <div className="hero-background"></div>
      <Grid
        item
        xs={12}
        md={6}
        className="hero-block1"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h2 style={h2style} className="hero-h2">
          Front-end розробник з 0
        </h2>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className="hero-block"
        sx={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "17rem",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div className="hero-salary-container">
            <span className="hero-salary-text">
              <b>199$</b>
            </span>
          </div>

          <span className="salary-text">800$</span>

          <hr className="hero-hr" />
          <hr className="hero-hr1" />
        </div>
        <MainButton text="почати навчання прямо зараз" sx={buttonStyle} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;