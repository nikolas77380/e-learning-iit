import React from "react";
import CustomAccordion from "../components/CustomAccordion";
import FaqText from "../constants/FaqText";
import { Grid, Typography } from "@mui/material";
import MainButton from "../components/MainButton";
import MainTitle from "../components/MainTitle";

function FaqSection() {
  const faqTitle = {
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "3.5rem",
    position: "relative",
    fontWeight: "bold",
    margin: "2rem 0",
  };
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <div className="faq-background"></div>
      <Grid item xs={12}>
        <MainTitle text={"Є питання?"} sx={faqTitle} />
      </Grid>
      <Grid item xs={11} md={9} sx={{ margin: "2rem 0" }}>
        <CustomAccordion items={FaqText} backgroundColor="#FFFFFF" />
      </Grid>
      <Grid
        item
        xs={11}
        md={10}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <MainButton
          text={"Почати навчання прямо зараз"}
          sx={{
            margin: "4rem 0",
            width: "34.9375rem",
            height: "5.125rem",
            fontSize: { md: "1.7rem", xs: "1rem" },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FaqSection;
