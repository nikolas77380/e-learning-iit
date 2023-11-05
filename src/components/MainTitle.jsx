import * as React from "react";
import Typography from "@mui/material/Typography";

export default function MainTitle({ text, sx }) {
  return (
    <Typography variant="h1" sx={sx}>
      {text}
    </Typography>
  );
}
