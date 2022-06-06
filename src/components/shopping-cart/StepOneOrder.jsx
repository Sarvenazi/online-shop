import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART } from "../../store/actionTypes";
import Product from "./Product";

const font = {
  fontWeight: "600",
};

function StepOneOrder() {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalSum = content.order.products.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.price * currentValue.quantity;
  },
  0);
  const totalProducts = content.order.products.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.quantity;
  },
  0);

  const handleCleanAll = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const alternateColor = ["rgba(211,211,211,0.6)", "#FFFFFF"];
  // const columns = ["product image", "product name", "price", "quantity" , ''];

  return (
    <Grid
      container
      columns={{ xs: 4, md: 12 }}
      justifyContent="center"
      sx={{ mt: 6, display: "flex", flexDirection: "column" }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Grid
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={3}>
            <Typography sx={font} variant="subtitle1">
              product image
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={font} variant="subtitle1">
              product name
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={font} variant="subtitle1">
              price
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={font} variant="subtitle1">
              quantity
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleCleanAll}>clean all</Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider />

      {content.order.products.map((product, index) => (
        <Product
          color={alternateColor[index % alternateColor.length]}
          key={product._id}
          product={product}
        />
      ))}

      <Divider />

      <Grid
        sx={{
          pt: 2,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography sx={font}>total sum : {totalSum.toFixed(2)} $</Typography>
        <Typography sx={font}>total products : {totalProducts}</Typography>
      </Grid>
    </Grid>
  );
}

export default StepOneOrder;
