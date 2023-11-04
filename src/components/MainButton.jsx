import * as React from "react";
import Button from "@mui/material/Button";

export default function MainButton({ text, onClickHandler, sx }) {
  const buttonStyles = {
    backgroundColor: "#E8511C",
    fontFamily: "Roboto",
    color: "white",
    borderRadius: "0",
    boxShadow: "0px 4px 4px 0px #00000040",
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: "0em",
  };
  return (
    <Button
      variant="contained"
      style={buttonStyles}
      onClick={onClickHandler}
      sx={sx}
    >
      {text}
    </Button>
  );
}
