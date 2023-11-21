import React from "react";
import CustomAccordion from "../components/CustomAccordion";
import items from "../constants/ProgramText";
import { Grid } from "@mui/material";
import MainButton from "../components/MainButton";
import MainTitle from "../components/MainTitle";

function CourseProgramm() {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", margin: " 1rem 0" }}
    >
      <Grid item xs={12}>
        <MainTitle
          sx={{
            fontFamily: "Montserrat",
            color: "#613D2A",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "3.9rem",
            fontWeight: "bold",
          }}
          text={"Програма курсу"}
        />
      </Grid>
      <Grid item xs={11} md={10} sx={{ marginTop: "2rem" }}>
        <CustomAccordion items={items} multiple />
      </Grid>
      <Grid
        item
        xs={10}
        md={10}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <MainButton
          text={"Почати навчання прямо зараз"}
          sx={{
            marginTop: "2rem",
            width: "35.0625rem",
            height: "5rem",
            fontSize: { md: "1.7rem", xs: "1rem" },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default CourseProgramm;
