import { CircularProgress } from "@mui/material";
import React from "react";

const SpinnerComponent = ({ size, thickness, color, ...props }) => {
  return (
    <CircularProgress
      size={size}
      thickness={thickness}
      color={color}
      {...props}
    />
  );
};

export default SpinnerComponent;
