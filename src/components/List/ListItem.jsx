import { ListItem, ListItemProps } from "@mui/material";
import React from "react";

const ListItemComponent = ({ children, ...props }) => {
  return (
    <ListItem
      sx={{
        padding: "0.5rem 0",
      }}
      {...props}
    >
      {children}
    </ListItem>
  );
};

export default ListItemComponent;
