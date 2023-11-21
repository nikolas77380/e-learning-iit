import { Grid } from "@mui/material";
import React from "react";
import image from "../images/mentor.jpeg";
import MainTitle from "../components/MainTitle";
import IconBlock from "../components/IconBlock";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  titleStyle,
  titleStyle2,
  nameStyle,
  positionStyle,
  paragrfStyle,
  shadowContainerStyle,
  gridTitleStyle,
} from "./style";
import "./style.css";
import {
  useImageAnimation,
  useTextAnimation,
} from "../components/animationMentor";

export default function MentorSection() {
  const { imageRef } = useImageAnimation();
  const { textContainerRef } = useTextAnimation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", alignContent: { xs: "flex-start", sm: "center" } }}
    >
      <Grid
        container
        spacing={0}
        item
        xs={12}
        sm={11}
        md={10}
        sx={shadowContainerStyle}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          position="relative"
          alignContent="flex-start"
          ref={imageRef}
          className="animate-image"
        >
          <Card sx={{ height: "100%" }}>
            <CardMedia
              sx={{ height: { xs: "400px", sm: "640px", md: "650px" } }}
              image={image}
              title="Микола Кіпняк"
            />
          </Card>
          <Grid item sx={gridTitleStyle}>
            <MainTitle text={"Ментор"} sx={titleStyle2} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          direction="column"
          justifyContent="center"
          alignItems="center"
          ref={textContainerRef}
          className="animate-text"
        >
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sx={{ display: { sm: "block", xs: "none" } }}>
              <MainTitle text={"Ментор"} sx={titleStyle} />
            </Grid>
            <h3 style={nameStyle}>Микола Кіпняк</h3>
            <p style={positionStyle}>Senior Full-stack engineer</p>
            <p style={paragrfStyle}>
              10 років досвіду у розробці. Сам навчався вдома програмуванню і
              пройшов шлях від маленької контори із зарплатою в 500 гривень до
              зарплати <strong style={{ color: "red" }}>14000$</strong> на
              місяць. За 10 років встих попрацювати:
              <ul>
                <li>невеликих аутсорс компаніях</li>
                <li>на фрілансі</li>
                <li>у стартапах</li>
                <li>у топових компаніях України</li>
              </ul>
            </p>
          </Grid>
          <Grid
            container
            item
            xs={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconBlock />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
