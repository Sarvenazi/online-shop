import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MINUS_QUANTITY,
  PLUS_QUANTITY,
  REMOVE_FROM_CART,
} from "../../store/actionTypes";
import { useDispatch } from "react-redux";

function Product({ color, product }) {
  const dispatch = useDispatch();

  const handleDeleteFactor = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };

  const handleDecreaseQuantity = () => {
    dispatch({
      type: MINUS_QUANTITY,
      payload: product,
    });
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: PLUS_QUANTITY,
      payload: product,
    });
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
        <Typography>
          {(product.price * product.quantity).toFixed(2)} $
        </Typography>
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
            onClick={() => handleDecreaseQuantity()}
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
            onClick={() => handleIncreaseQuantity()}
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
        <IconButton onClick={() => handleDeleteFactor()}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Product;
