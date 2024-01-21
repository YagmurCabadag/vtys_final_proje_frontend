import { Avatar, AvatarProps } from "@mui/material";
import React from "react";

const AvatarComponent = ({ children, ...props }) => {
  return (
    <Avatar sx={{ width: 100, height: 100 }} {...props}>
      {children}
    </Avatar>
  );
};

export default AvatarComponent;
