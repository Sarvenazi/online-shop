import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Product({ color, product, ...props }) {
  const handleDeleteFactor = (product) => {
    console.log(product, "product");
  };

  return (
    <Grid
      Grid
      container
      sx={{
        display: "flex",
        py: 0.4,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: color,
      }}
    >
      <Grid item xs={3}>
        <img
          src={`${product.image}`}
          alt={product.name}
          style={{
            flex: 1,
            width: "30%",
            height: "30%",
            resizeMode: "contain",
            contain: "cover",
          }}
        />
      </Grid>

      <Grid item xs={3}>
        <Typography> {product.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography> {product.price * product.quantity} $</Typography>
      </Grid>

      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>
          <Button
            variant="contained"
            size="small"
            style={{
              maxWidth: "20px",
              maxHeight: "20px",
              minWidth: "20px",
              minHeight: "20px",
            }}
          >
            –
          </Button>
        </span>
        <Typography sx={{ px: 1 }}> {product.quantity}</Typography>
        <span>
          <Button
            size="small"
            variant="contained"
            style={{
              maxWidth: "10px",
              maxHeight: "20px",
              minWidth: "10px",
              minHeight: "20px",
            }}
          >
            +
          </Button>
        </span>
      </Grid>

      <Grid item xs={2}>
        <DeleteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => handleDeleteFactor(product)}
        />
      </Grid>
    </Grid>
  );
}

export default Product;
