import React from "react";
import WhyText from "../constants/WhyConstants";
import { Grid } from "@mui/material";
import "../Pages/style.css";

const WhyComponents = () => {
  return (
    <>
      {WhyText.map((text) => (
        <Grid
          item
          key={text.id}
          md={6}
          xs={12}
          className="block"
          style={{
            display: "flex",
            margin: "1rem",
            maxWidth: "470px",
            height: "9rem",
            alignContent: "center",
          }}
        >
          <span className="blockText">{text}</span>
        </Grid>
      ))}
    </>
  );
};

export default WhyComponents;
