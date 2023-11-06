import React from "react";
import CustomAccordion from "../components/CustomAccordion";
import FaqText from "../constants/faqtext";
import { Grid, Typography } from "@mui/material";
import MainButton from "../components/MainButton";

function CourseProgramm() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat",
            color: "#FFFFFF",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "4rem",
          }}
        >
          Є питання?
        </Typography>
      </Grid>
      <Grid item xs={11} md={10} sx={{ marginTop: "3rem" }}>
        <CustomAccordion items={items} multiple={true} />
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
