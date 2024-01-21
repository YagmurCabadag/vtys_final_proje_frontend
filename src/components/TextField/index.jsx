import { TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({ className, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      {...props}
      className={className}
    />
  );
};

export default TextFieldComponent;
