import React from "react";
import { Grid, Link, useMediaQuery, useTheme } from "@mui/material";
import MainButton from "../components/MainButton";

const FooterSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerStyle = {
    alignContent: "center",
    padding: "1.5rem",
    backgroundColor: "#22272B",
    width: "100%",
    textAlign: "center",
    margin: "0",
  };

  const linkStyle = {
    color: "white",
    margin: "0.5rem",
    textDecoration: "none",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return (
    <Grid container spacing={3} sx={containerStyle}>
      <Grid item xs={12} md={12} sx={gridStyle}>
        <Link href="mailto:institute-of-it@gmail.com" style={linkStyle}>
          institute-of-it@gmail.com
        </Link>
        <Link href="#" style={linkStyle}>
          Публічна оферта
        </Link>
        <Link href="#" style={linkStyle}>
          Політика конфіденційності
        </Link>
      </Grid>
      <Grid item xs={12} md={12}>
        <MainButton
          text={"Зв'язатися з нами"}
          sx={{
            width: "18.1875rem",
            height: "3.8125rem",
            fontSize: "1.3rem",
            margin: ".5rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FooterSection;
