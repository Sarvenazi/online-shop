import React from "react";
import { Divider, Grid } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,
};

const hover = {
  "&:hover": { cursor: "pointer" },
  display: "flex",
};
function Header() {
  function showComponent() {}
  return (
    <>
      <Grid container sx={header}>
        <Grid item xs={1} sx={hover}>
          <ShoppingCartIcon sx={{ fontSize: 32 }} />
        </Grid>
        <Grid item xs={1} justifyContent="end" sx={hover}>
          <AccountBoxIcon sx={{ fontSize: 32 }} onMouseOver={showComponent} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default Header;
