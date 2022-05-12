import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

const footer = {
  py: 0.7,
  px: 0.7,
  mt: "58px",
  textAlign: "center",
};

const Footer = () => {
  return (
    <Grid component="footer" sx={footer}>
      <Divider />
      <Typography variant={"h7"} sx={{ pt: 2 }}>
        This website is property of Sarv Sanloui
      </Typography>
    </Grid>
  );
};

export default Footer;
