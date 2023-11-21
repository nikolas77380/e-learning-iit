import React from "react";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import sliderData from "../constants/SliderText";
import PriceItem from "../components/PriceItem";
import "./style.css";
import MainTitle from "../components/MainTitle";

const PricesSection = () => {
  const priceTitle = {
    fontFamily: "Montserrat",
    color: "#613D2A",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "3.9rem",
    fontWeight: "bold",
  };
  const styleSlyde = {
    display: "flex",
    justifyContent: "center",
    maxHeight: "39rem",
    height: "110%",
    width: "100%",
    alignContent: "center",
  };
  return (
    <Grid container className="prices-container" style={{ height: "53rem" }}>
      <Grid item md={12} xs={12}>
        <MainTitle sx={priceTitle} text={"Тарифи"} />
      </Grid>
      <Grid md={12} xs={12}>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          centeredSlides={true}
          className="swiper"
          style={{
            height: "45rem",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index} style={styleSlyde}>
              <PriceItem title={slide.title} items={slide.items} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default PricesSection;
