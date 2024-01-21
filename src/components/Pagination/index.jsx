import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ count, ...props }) => {
  return (
    <Stack spacing={2}>
      <Pagination count={count} color="secondary" {...props} />
    </Stack>
  );
};

export default PaginationComponent;
