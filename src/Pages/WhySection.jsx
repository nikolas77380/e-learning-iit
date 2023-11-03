import React from "react";
import Grid from "@mui/material";
import "./style.css";

const EL2 = () => {
  return (
    <Grid container spacing={3} className="el2-page">
      <Grid item xs={12} md={12}>
        <h1 className="El2h1">
          ЧОМУ ТОБІ ПОТРІБЕН
          <br />
          ЦЕЙ КУРС?
        </h1>
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
            Кого не влаштовує рівень його доходу на зараз, життя "від зп до зп",
            робота "на дядю" за копійки, і хто хоче отримувати стабільну зп у $
          </p>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className="block">
          <p className="blockText">Хто хоче освоїти нову професію</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default EL2;
