// pages/404.js
import React from "react";
import Link from "next/link";
import { Container, Typography, Button, Grid } from "@mui/material";

const Custom404 = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "80vh" }}
      >
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Sayfa bulunamadı.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Custom404;
