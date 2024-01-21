import { Paper } from "@mui/material";
import React from "react";

const PaperComponent = ({ children, ...props }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default PaperComponent;
