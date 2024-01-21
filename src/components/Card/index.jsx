import { Card } from "@mui/material";
import React from "react";

const CardComponent = ({ ...props }) => {
  return (
    <Card variant="outlined" {...props} elevation={0}>
      {props.children}
    </Card>
  );
};

export default CardComponent;
