import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import AppConfig from "@/config/AppConfig";

const FooterContainer = styled("footer")({
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  marginTop: "auto",
  textAlign: "center",
});

const Footer = () => {
  return (
    <Box component="footer">
      <Divider className="my-4" />
      <FooterContainer>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} - {AppConfig.appName} v.
          {AppConfig.appVersion}
        </Typography>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
