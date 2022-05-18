import React, { useEffect, useState } from "react";
import { Badge, Divider, Grid } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Header = ({ ...props }) => {
  const [state, setstate] = useState();
  const content = useSelector((state) => state);
  const navigate = useNavigate();

  const navigateTo = (address) => navigate(address);
  const showComponent = () => {};

  useEffect(() => {
    let qty = content.order.products.map((e) => e.quantity);
    const total = qty.reduce((a, b) => a + b, 0);
    setstate(total);
  }, [content, state]);

  return (
    <>
      <Grid container sx={header}>
        <Grid
          item
          xs={1}
          sx={hover}
          onClick={() => navigateTo("./shopping-cart")}
        >
          <Badge badgeContent={state} color="primary">
            <ShoppingCartIcon sx={{ fontSize: 32 }} />
          </Badge>
        </Grid>
        <Grid item xs={1} sx={hover} onClick={() => navigateTo("./home")}>
          <AcUnitIcon sx={{ fontSize: 32 }} />
        </Grid>
        <Grid item xs={1} justifyContent="end" sx={hover}>
          <AccountBoxIcon sx={{ fontSize: 32 }} onMouseOver={showComponent} />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Header;
