import React from "react";
import { Grid } from "@mui/material";
import MainTitle from "../components/MainTitle";
import "./style.css";

const WhySection = () => {
  return (
    <>
      <Grid container spacing={3} className="el2-page">
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainTitle
            text={"ЧОМУ ТОБІ ПОТРІБЕН ЦЕЙ КУРС?"}
            sx={{
              fontFamily: "Montserrat",
              color: "#FFFFFF",
              fontSize: "70px",
              textAlign: "center",
              width: "55rem",
              marginTop: "2rem",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="block">
            <p className="blockText">
              Хто хоче працювати віддалено у зручному для вас графіку із
              перспективою росту, а не просто просиджувати час з 9 до 18
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="block">
            <p className="blockText">
              Хто більше не хоче мріяти про краще життя, а готовий брати
              відповідальність за нього
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="block">
            <p className="blockText">
              Кого не влаштовує рівень його доходу на зараз, життя "від зп до
              зп", робота "на дядю" за копійки, і хто хоче отримувати стабільну
              зп у $
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="block">
            <p className="blockText">Хто хоче освоїти нову професію</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WhySection;
