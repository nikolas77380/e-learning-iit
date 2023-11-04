import React from "react";
import { Typography, Grid } from "@mui/material";
import MainButton from "../components/MainButton";
import MainTitle from "../components/MainTitle";
import "./style.css";

const HeroSection = () => {
  return (
    <>
      <Grid container className="el1-container">
        <Grid
          item
          xs={11}
          md={11}
          className="el1-block1"
          sx={{
            marginTop: {
              xs: "-4rem",
              md: "10rem",
            },
          }}
        >
          <MainTitle
            text={"FRONT-END РОЗРОБНИК З 0"}
            sx={{ fontFamily: "Aclonica", color: "#613D2A", width: "35rem" }}
          />
        </Grid>
        <Grid
          item
          xs={11}
          md={12}
          className="el1-block"
          sx={{
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "15rem",
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
            <hr style={{}} className="el-hr" />
            <hr className="el-hr1" />
          </div>
          <MainButton
            text="почати навчання прямо зараз"
            sx={{
              width: "41px",

              fontSize: "40px",
              lineHeight: "36.5px",
              padding: "2px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
