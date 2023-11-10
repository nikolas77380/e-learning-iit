import React from "react";
import { Grid } from "@mui/material";
import MainTitle from "../components/MainTitle";
import "./style.css";

const SalarySection = () => {
  const titleStyle = {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: "3.8125rem",
    letterSpacing: ".0625rem",
    textAlign: "center",
    textTransform: "uppercase",
    margin: "1rem 0",
  };
  const salaryBlock = {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    height: "12rem",
    alignContent: "center",
  };
  const salaryPar = {
    color: "#E8511C",
    fontSize: "2.4rem",
    lineHeight: "3.0475rem",
  };
  return (
    <Grid
      container
      spacing={3}
      className="why-page"
      sx={{
        display: "flex",
        alignContent: "center",
        padding: "2rem",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainTitle text={"Скільки Ви будете заробляти в IT?"} sx={titleStyle} />
      </Grid>
      <Grid container md={12} xs={12} sx={{ display: "flex" }}>
        <Grid item md={5} xs={12} className="salary-block" sx={salaryBlock}>
          <Grid
            style={{
              display: "flex",

              justifyContent: "space-between",
            }}
            md={12}
          >
            <span className="blockText" style={{ fontSize: "2rem" }}>
              Junior
            </span>
            <span className="blockText" style={{ fontSize: "1.5rem" }}>
              перші 8 місяців
            </span>
          </Grid>
          <Grid
            style={{
              display: "flex",
              height: "12rem",
              justifyContent: "center",
            }}
          >
            <p className="salaryPar">700$ - 1291$</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        md={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item md={5} xs={12} className="salary-block" sx={salaryBlock}>
          <Grid
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            md={12}
          >
            <span className="blockText" style={{ fontSize: "1.875rem" }}>
              Middle
            </span>
            <span className="blockText" style={{ fontSize: "1.5rem" }}>
              8 місяців - 2 роки
            </span>
          </Grid>
          <Grid
            style={{
              display: "flex",
              height: "12rem",
              justifyContent: "center",
            }}
          >
            <p className="salaryPar">1900$ - 3325$</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        md={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Grid item md={5} xs={12} className="salary-block" sx={salaryBlock}>
          <Grid
            style={{
              display: "flex",
              height: "12rem",
              justifyContent: "space-between",
            }}
            md={12}
          >
            <span className="blockText" style={{ fontSize: "1.875rem" }}>
              Senior
            </span>
            <span className="blockText" style={{ fontSize: "1.5rem" }}>
              2 + роки
            </span>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p className="salaryPar">4000$ - 6000$</p>
          </Grid>
        </Grid>
      </Grid>
      <p
        style={{
          color: "white",
          fontSize: "1.25rem",
          lineHeight: "1.5237rem",
          fontFamily: "Montserrat",
        }}
      >
        Статистика платфори DOU
      </p>
    </Grid>
  );
};

export default SalarySection;
