import React from "react";
import Grid from "@mui/material/Grid";
import MainButton from "../components/MainButton";
import "./style.css";

const HeroSection = () => {
  return (
    <>
      <Grid container className="hero-container">
        <Grid
          item
          xs={12}
          md={6}
          className="el1-block1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "Aclonica",
              color: "#613D2A",
              fontSize: "3.5rem",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Front-end розробник з 0
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          className="el1-block"
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
            <div className="el1-salary-container">
              <span className="el1-salary-text">
                <b>199$</b>
              </span>
            </div>

            <span className="salary-text">800$</span>

            <hr className="el-hr" />
            <hr className="el-hr1" />
          </div>
          <MainButton
            text="почати навчання прямо зараз"
            sx={{
              width: "26.5rem",
              height: "9.5rem",
              fontSize: "2.5rem",
              lineHeight: "2.3rem",
              padding: "2px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
