import { List, ListProps } from "@mui/material";
import React from "react";

const ListComponent = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};

export default ListComponent;
